from rest_framework import generics
from .serializers import InventoryItemSerializer
from .models import InventoryItem

# Create your views here.


class InventoryItemList(generics.ListCreateAPIView):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer


class InventoryItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer
