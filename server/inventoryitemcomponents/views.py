from rest_framework import generics
from .serializers import InventoryItemComponentSerializer
from .models import InventoryItemComponent
# Create your views here.


class InventoryItemComponentList(generics.ListCreateAPIView):
    queryset = InventoryItemComponent.objects.all()
    serializer_class = InventoryItemComponentSerializer


class InventoryItemComponentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = InventoryItemComponent.objects.all()
    serializer_class = InventoryItemComponentSerializer
