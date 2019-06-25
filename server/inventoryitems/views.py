from rest_framework import generics, viewsets
from .serializers import InventoryItemSerializer
from .models import InventoryItem

# Create your views here.


class InventoryItemsViewSet(viewsets.ModelViewSet):
    serializer_class = InventoryItemSerializer
    queryset = InventoryItem.objects.all()
    resource_name = 'inventory-items'
