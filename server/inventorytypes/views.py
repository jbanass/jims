from .models import InventoryType
from .serializers import InventoryTypeSerializer
from rest_framework import generics

# Create your views here.


class InventoryTypeList(generics.ListCreateAPIView):
    queryset = InventoryType.objects.all()
    serializer_class = InventoryTypeSerializer


class InventoryTypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = InventoryType.objects.all()
    serializer_class = InventoryTypeSerializer
