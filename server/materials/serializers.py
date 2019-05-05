from rest_framework import serializers
from .models import Material
from companies.models import Company
from vendors.models import Vendor


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ('id', 'vendor_sku', 'vendor',
                  'company', 'created', 'modified')

    def validate(self, data):
        if Vendor.objects.get(pk=data['vendor'].id).company != data['company']:
            raise serializers.ValidationError(
                'Invalid company selected for vendor.')

        return data
