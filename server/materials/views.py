from rest_framework import generics
from .serializers import MaterialSerializer, MaterialExpandedSerializer
from .models import Material

# Create your views here.


class MaterialList(generics.ListCreateAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer


class MaterialExpandedList(generics.ListAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialExpandedSerializer


class MaterialDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
