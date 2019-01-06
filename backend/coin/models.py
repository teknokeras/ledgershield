from django.db import models
from .utils import coins_image_upload_to

# Create your models here.

'''
    Abstract Timed model will created and modified column in the model.
'''


class TimedModel(models.Model):
    date_created = models.DateTimeField(auto_now_add=True, db_index=True)
    date_modified = models.DateTimeField(auto_now=True, db_index=True)

    class Meta:
        abstract = True


class Coin(models.Model):
    name = models.CharField(db_index=True, unique=True, max_length=50)
    symbol = models.CharField(db_index=True, unique=True, max_length=30)
    image = models.ImageField(upload_to=coins_image_upload_to, null=True)
    operational = models.BooleanField(default=False)
    service_fee = models.FloatField(default=0)
    decimals = models.CharField(default=0, max_length=30)
    # fee_per_kb = models.PositiveIntegerField(default=0)
    multi_withdrawal = models.BooleanField(default=False)
    block_explorer_url = models.URLField(null=True, blank=True)
    price_usd = models.FloatField(default=0.0)
    percent_change_1h = models.FloatField(default=0.0)
    percent_change_24h = models.FloatField(default=0.0)
    percent_change_7d = models.FloatField(default=0.0)

    def __str__(self):
        return self.name

    def get(self):
        return self;

    class Meta:
        ordering = ['pk','-operational']


class CoinPair(TimedModel):
    source = models.ForeignKey(Coin, related_name="source_coin", on_delete=models.CASCADE)
    destination = models.ForeignKey(Coin, related_name="destination_coin", on_delete=models.CASCADE)
    rate = models.FloatField(default=0.0)
    minerFee = models.FloatField(default=0.0)
    
    class Meta:
        ordering = ['source__symbol']