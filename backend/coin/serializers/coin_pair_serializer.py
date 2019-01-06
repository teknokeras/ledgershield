from rest_framework import serializers
from coin.models import CoinPair

class CoinPairSerializer(serializers.ModelSerializer):

    class Meta:
        model = CoinPair
        fields = '__all__'