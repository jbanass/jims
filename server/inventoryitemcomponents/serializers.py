from rest_framework_json_api import serializers
from .models import InventoryItemComponent


class InventoryItemComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItemComponent
        fields = ('material', 'inventory_item', 'vendor',
                  'company', 'quantity', 'created', 'modified')
