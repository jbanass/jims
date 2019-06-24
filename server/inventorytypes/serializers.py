from rest_framework_json_api import serializers
from .models import InventoryType


class InventoryTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryType
        fields = ('id', 'name', 'description', 'company',
                  'color', 'created', 'modified')
