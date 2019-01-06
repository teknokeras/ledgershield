from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.conf.urls import url
from coin.consumers import CoinRateConsumer

websocket_urlpatterns = [
    url(r'^ws/coinrates/$', CoinRateConsumer),
]

application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    ),
})