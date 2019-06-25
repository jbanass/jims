from rest_framework import generics, viewsets
from .serializers import MaterialSerializer
from .models import Material

# Create your views here.


class MaterialViewSet(viewsets.ModelViewSet):
    serializer_class = MaterialSerializer
    queryset = Material.objects.all()
    resource_name = 'materials'
