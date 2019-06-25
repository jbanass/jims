from rest_framework_json_api import serializers
from .models import Material


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ('id', 'vendor_sku', 'vendor',
                  'company', 'created', 'modified')
