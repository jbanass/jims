from .models import InventoryType
from .serializers import InventoryTypeSerializer
from rest_framework import generics, viewsets

# Create your views here.


class InventoryTypesViewSet(viewsets.ModelViewSet):
    serializer_class = InventoryTypeSerializer
    queryset = InventoryType.objects.all()
    resource_name = 'inventory-types'
