import datetime

from django.http import Http404

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny

from .serializers.coin_serializer import CoinSerializer
from .models import Coin

class GetCoinPrice(APIView):
	permission_classes = (AllowAny,)
	"""
	GET coin prices
	"""
	def get(self, request, format=None):
		coins = Coin.objects.all()
		serializer = CoinSerializer(coins, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
		