from rest_framework import serializers
from .models import InventoryItem
from inventorytypes.models import InventoryType


class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = ('id', 'sku', 'name', 'description',
                  'inventory_type', 'company', 'created', 'modified')

    def validate(self, data):
        if InventoryType.objects.get(pk=data['inventory_type'].id).company != data['company']:
            raise serializers.ValidationError(
                'Invalid Inventory Type selected for company.')

        return data
