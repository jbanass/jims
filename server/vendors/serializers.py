from rest_framework_json_api import serializers
from rest_framework_json_api import relations
from .models import Vendor
from .models import Company


class VendorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vendor
        fields = ('id', 'name', 'company',
                  'url', 'created', 'modified')
