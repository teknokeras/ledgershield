import logging
import json
import requests

from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer

from celery import shared_task
from .models import Coin, CoinPair

logger = logging.getLogger('updating pair rates')

def get_coin_pair(selectedCoin, coins):
	pairs = list()

	logging.info('getting pairs for '+selectedCoin.symbol);

	for coin in coins:
		if coin.id == selectedCoin.id:
			continue

		cp = CoinPair.objects.filter(source=selectedCoin).filter(destination=coin)

		if cp.count() == 0:
			#does not exists yet insert it
			coin_pair = CoinPair(source=selectedCoin, destination= coin)
			coin_pair.save()

			pairs.append(coin_pair)
		else:
			pairs.append(cp.first())

	return pairs

def fetch_pair_rate(pair):
    url = 'https://shapeshift.io/marketinfo/{}'.format(pair)
    try:
        response = requests.get(url)
    except Exception as ex:
        logger.warning('Error while fetching rate of pair {}, {}'.format( pair, ex))
        return 500, None
    return response.status_code, response.text

def fetch_prices(coins):
	url = 'https://api.coinmarketcap.com/v2/ticker/?convert=USD'

	symbols = list()

	for coin in coins:
		symbols.append(coin.symbol)

	try:
		response = requests.get(url)

		prices_complete_data = response.json()
		prices = prices_complete_data['data']

		index = 1
		max_index = prices_complete_data['metadata']['num_cryptocurrencies'] + 1
		found_curr = 0

		for i in range(index, max_index):

			key = str(i)

			if key not in prices:
				continue

			price = prices[str(i)]

			if price['symbol'] not in symbols:
				continue

			coin = coins.filter(symbol=price['symbol'])

			if coin.count() == 0:
				continue

			coin = coin.first()
			coin.price_usd = price['quotes']['USD']['price'] 
			coin.percent_change_1h = price['quotes']['USD']['percent_change_1h'] 
			coin.percent_change_24h = price['quotes']['USD']['percent_change_24h'] 
			coin.percent_change_7d = price['quotes']['USD']['percent_change_7d'] 

			coin.save()

			found_curr += 1

			logger.info('Getting price for {} {} USD'.format(coin.name, coin.price_usd))

			if found_curr == coins.count():
				break

	except Exception as ex:
		print(ex)
		logger.warning('Error while fetching coin prices '+str(ex))

@shared_task
def update_rates():
	logging.info('Updating rates')

	coins = Coin.objects.all()
	all_pairs = list()

	fetch_prices(coins)

	for coin in coins:
		all_pairs += get_coin_pair(coin, coins)

	logging.info('all pairs obtained')

	for pair in all_pairs:
		coin_pair = '{}_{}'.format(pair.source.symbol.lower(), pair.destination.symbol.lower())

		# logger.info('https://shapeshift.io/marketinfo/{}'.format(coin_pair))
		status, data = fetch_pair_rate(coin_pair)

		if status == 200:
			market_info = json.loads(data)
			if "error" not in market_info:
				pair.rate = market_info['rate']
				pair.minerFee = market_info['minerFee']
				pair.save()
			logger.info('{} {}'.format(status, data))

	logging.info('Updating rates are completed')
	
	channel_layer = get_channel_layer()
	# Trigger reload message sent to group
	async_to_sync(channel_layer.group_send)(
		"CoinRatesGroup",
		{'type': 'broadcastRates'}
	)