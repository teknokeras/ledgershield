from asgiref.sync import async_to_sync
from channels.generic.websocket import JsonWebsocketConsumer
from coin.models import CoinPair, Coin
from coin.serializers.coin_pair_serializer import CoinPairSerializer
from coin.serializers.coin_serializer import CoinSerializer

class CoinRateConsumer(JsonWebsocketConsumer):

    GROUP_NAME = "CoinRatesGroup"

    def get_prices(self):
        coins = Coin.objects.all()
        serializer = CoinSerializer(coins, many=True)

        # Send message to WebSocket
        self.send_json(serializer.data)
        #self.disconnect()



    def connect(self):
        # Join group
        async_to_sync(self.channel_layer.group_add)(
            self.GROUP_NAME,
            self.channel_name
        )
        self.accept()


    def disconnect(self, close_code):
    	async_to_sync(self.channel_layer.group_discard)(
            self.GROUP_NAME,
            self.channel_name
        )


    def broadcastRates(self, event):
        self.get_prices()

