from rest_framework import serializers
from .models import InventoryType


class InventoryTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryType
        fields = ('id', 'name', 'description', 'company',
                  'color', 'created', 'modified')
