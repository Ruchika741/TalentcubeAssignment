from django.db import models

# Create your models here.
class Product(models.Model):
    name= models.CharField(max_length=20)
    description= models.TextField(max_length=200)
    price= models.DecimalField(max_digits=6, decimal_places=1)
    item_image= models.ImageField(upload_to='images/',blank=True)

    def __str__(self):
        return self.name