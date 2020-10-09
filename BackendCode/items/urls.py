from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import ShopViewSet

router= routers.DefaultRouter()

router.register('shops', ShopViewSet)

urlpatterns= [
    path('', include(router.urls)),
]

