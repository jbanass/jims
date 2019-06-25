from rest_framework import generics, viewsets
from .serializers import InventoryItemComponentSerializer
from .models import InventoryItemComponent
# Create your views here.


class InventoryItemComponentViewSet(viewsets.ModelViewSet):
    serializer_class = InventoryItemComponentSerializer
    queryset = InventoryItemComponent.objects.all()
    resource_name = 'inventory-item-components'
