from .models import Vendor
from .serializers import VendorSerializer
from rest_framework import generics, viewsets

# Create your views here.


class VendorViewSet(viewsets.ModelViewSet):
    serializer_class = VendorSerializer
    queryset = Vendor.objects.all()
    resource_name = 'vendors'
