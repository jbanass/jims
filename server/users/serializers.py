from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email',  'username', 'groups',
                  'user_permissions', 'is_staff', 'is_active', 'is_superuser', 'last_login', 'date_joined')
