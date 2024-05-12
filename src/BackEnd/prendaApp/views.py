from django.http import JsonResponse
from django.views import View
from rest_framework import generics
from .models import *
from .serializer import *
from django.db.models import F


#-----------------------------------------------PRENDA-----------------------------------------------
class PrendaCreateView(generics.ListCreateAPIView):  #~PrendaCRUD
    queryset = Prenda.objects.all()
    serializer_class = PrendaSerializer
    
class PrendaRetrieveView(generics.RetrieveAPIView):  #~PrendaByID
    queryset = Prenda.objects.all()
    serializer_class = PrendaSerializer
    lookup_field = 'id'    
    

class PrendasConDescuentoView(View):                 #~Prendas Ordenadas por Mayor Rebaja y Solo las que Precio Rebaja>Precio
    def get(self, request):
        prendas = Prenda.objects.filter(precio_rebajado__lt=F('precio_original')).order_by('precio_rebajado')
        serializer = PrendaSerializer(prendas, many=True)
        return JsonResponse(serializer.data, safe=False) 
    
    
class NovedadesListView(generics.ListAPIView):       #~Prendas Ordenadas por fecha de publicación de manera descendente
    queryset = Prenda.objects.order_by('-fecha_publicacion')  
    serializer_class = PrendaSerializer

    

class PrendaTipoListView(generics.ListAPIView):
    serializer_class = PrendaSerializer

    def get_queryset(self):
        tipo_prenda = self.kwargs['tipo_prenda']
        queryset = Prenda.objects.filter(tipo_prenda=tipo_prenda)
        return queryset
#-----------------------------------------------MARCA-----------------------------------------------
    
class MarcaCreateView(generics.ListCreateAPIView):      #~MarcaCRUD
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer


#-----------------------------------------------Noticia-----------------------------------------------

class NoticiaCreateView(generics.ListCreateAPIView):  #~NoticiaCRUD
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer