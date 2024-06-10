from django.http import JsonResponse
from django.views import View
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializer import *
from django.db.models import F
from django.shortcuts import render,redirect
from django.conf import settings
from django.core.mail import send_mail

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


class PrendasPorMarcaListView(generics.ListAPIView):
    serializer_class = PrendaSerializer

    def get_queryset(self):
        marca_nombre = self.kwargs['marca']
        queryset = Prenda.objects.filter(marca__nombre=marca_nombre)
        return queryset
#-----------------------------------------------Noticia-----------------------------------------------

class NoticiaCreateView(generics.ListCreateAPIView):  #~NoticiaCRUD
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    
class NoticiaRetrieveView(generics.RetrieveAPIView):  #~NoticiaByID
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    lookup_field = 'id'    

#-----------------------------------------------SobreNosotros-----------------------------------------------

class EmailAPIView(APIView):
    def post(self,request):
        try:
            to_email="clothinfscoremain@outlook.es"
            subject= request.data.get('asunto')
            message =request.data.get('mensaje')
            send_mail(to_email,message,None,[to_email])
            return Response({'message':'Correo Enviado con Exito'},status= status.HTTP_200_OK)
        except Exception as e:
            error=str(e)
            return Response({'message': error},status=status.HTTP_400_BAD_REQUEST)
