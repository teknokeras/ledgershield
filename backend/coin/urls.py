from django.conf.urls import url

from .views import GetCoinPrice

urlpatterns = [
	url(r'^prices/$', GetCoinPrice.as_view()),
]