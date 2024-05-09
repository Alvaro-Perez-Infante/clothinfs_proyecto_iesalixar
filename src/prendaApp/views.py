from rest_framework import generics
from .models import Ropa
from .serializers import RopaSerializer

class RopaCreateAPIView(generics.ListCreateAPIView):
    queryset = Ropa.objects.all()
    serializer_class = RopaSerializer
