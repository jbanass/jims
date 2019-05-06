from rest_framework import serializers
from .models import Material
from companies.models import Company
from vendors.models import Vendor
from vendors.serializers import VendorSerializer
from companies.serializers import CompanySerializer


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


class MaterialExpandedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ('id', 'vendor_sku', 'vendor',
                  'company', 'created', 'modified')
        depth = 1
