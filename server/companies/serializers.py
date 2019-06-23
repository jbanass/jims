from rest_framework_json_api import serializers
from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'street', 'city',
                  'state', 'postal', 'image', 'site', 'created', 'modified')
        resource_name = 'companies'
