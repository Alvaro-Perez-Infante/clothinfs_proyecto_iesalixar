from rest_framework import generics
from .models import Prenda
from .serializer import PrendaSerializer

class PrendaCreateView(generics.ListCreateAPIView):
    queryset = Prenda.objects.all()
    serializer_class = PrendaSerializer