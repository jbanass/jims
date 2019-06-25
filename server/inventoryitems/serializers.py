from rest_framework_json_api import serializers
from .models import InventoryItem


class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = ('id', 'sku', 'name', 'description',
                  'inventory_type', 'company', 'created', 'modified')
