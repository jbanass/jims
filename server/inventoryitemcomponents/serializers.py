from rest_framework import serializers
from .models import InventoryItemComponent
from vendors.models import Vendor
from companies.models import Company
from inventoryitems.models import InventoryItem


class InventoryItemComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItemComponent
        fields = ('material', 'inventory_item', 'vendor',
                  'company', 'quantity', 'created', 'modified')

    def validate(self, data):
        if Vendor.objects.get(pk=data['vendor'].id).company != data['company']:
            raise serializers.ValidationError(
                'Invalid company selected for vendor.')

        if InventoryItem.objects.get(pk=data['inventory_item'].id).company != data['company']:
            raise serializers.ValidationError(
                'Invalid company selected for Inventory Item.')

        return data
