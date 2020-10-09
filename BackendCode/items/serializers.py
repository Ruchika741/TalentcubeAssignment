from rest_framework import serializers
from .models import Product

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','name', 'description', 'price','item_image']
