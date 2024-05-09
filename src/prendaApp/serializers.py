from rest_framework import serializers
from .models import Ropa

class RopaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ropa
        fields = ['title']
