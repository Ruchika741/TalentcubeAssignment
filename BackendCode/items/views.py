from .models import Product
from rest_framework import viewsets
from .serializers import ShopSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

class ShopViewSet(viewsets.ModelViewSet):
    serializer_class= ShopSerializer
    queryset= Product.objects.all()
    authentication_classes = (TokenAuthentication,)  # to tell django that you are using tokens
    permission_classes = (AllowAny,)
