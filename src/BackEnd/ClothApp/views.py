from django.http import JsonResponse
from django.views import View
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from django.core.mail import send_mail
from django.db.models import F

from .models import Prenda, Marca, Noticia, Cart, CartItem
from .serializer import PrendaSerializer, MarcaSerializer, NoticiaSerializer, CartSerializer, CartItemSerializer

#-----------------------------------------------PRENDA-----------------------------------------------
class PrendaCreateView(generics.ListCreateAPIView):
    queryset = Prenda.objects.all()
    serializer_class = PrendaSerializer
    
class PrendaRetrieveView(generics.RetrieveAPIView):
    queryset = Prenda.objects.all()
    serializer_class = PrendaSerializer
    lookup_field = 'id'    

class PrendasConDescuentoView(View):
    def get(self, request):
        prendas = Prenda.objects.filter(precio_rebajado__lt=F('precio_original')).order_by('precio_rebajado')
        serializer = PrendaSerializer(prendas, many=True)
        return JsonResponse(serializer.data, safe=False) 
    
class NovedadesListView(generics.ListAPIView):
    queryset = Prenda.objects.order_by('-fecha_publicacion')  
    serializer_class = PrendaSerializer
  
class PrendaTipoListView(generics.ListAPIView):
    serializer_class = PrendaSerializer

    def get_queryset(self):
        tipo_prenda = self.kwargs['tipo_prenda']
        queryset = Prenda.objects.filter(tipo_prenda=tipo_prenda)
        return queryset

#-----------------------------------------------MARCA-----------------------------------------------
class MarcaCreateView(generics.ListCreateAPIView):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer

class PrendasPorMarcaListView(generics.ListAPIView):
    serializer_class = PrendaSerializer

    def get_queryset(self):
        marca_nombre = self.kwargs['marca']
        queryset = Prenda.objects.filter(marca__nombre=marca_nombre)
        return queryset

#-----------------------------------------------NOTICIA-----------------------------------------------
class NoticiaCreateView(generics.ListCreateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    
class NoticiaRetrieveView(generics.RetrieveAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    lookup_field = 'id'    

#-----------------------------------------------SOBRE NOSOTROS-----------------------------------------------
class EmailAPIView(APIView):
    def post(self, request):
        try:
            to_email = "clothinfscoremain@outlook.es"
            subject = request.data.get('asunto')
            message = request.data.get('mensaje')
            send_mail(subject, message, None, [to_email])
            return Response({'message': 'Correo Enviado con Exito'}, status=status.HTTP_200_OK)
        except Exception as e:
            error = str(e)
            return Response({'message': error}, status=status.HTTP_400_BAD_REQUEST)

#-----------------------------------------------CARRITO-----------------------------------------------

class CartView(APIView):
    def get(self, request):
        cart, created = Cart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

class AddToCartView(APIView):
    def post(self, request, prenda_id):
        prenda = Prenda.objects.get(id=prenda_id)
        if prenda.cantidad_stock <= 0:
            return Response({'error': 'Este producto está agotado.'}, status=status.HTTP_400_BAD_REQUEST)
        
        cart, created = Cart.objects.get_or_create(user=request.user)
        cart_item, created = CartItem.objects.get_or_create(cart=cart, prenda=prenda)
        
        if not created:
            cart_item.quantity += 1
        else:
            cart_item.quantity = 1
        cart_item.save()
        
        prenda.cantidad_stock -= 1
        prenda.save()

        return Response({'message': 'Producto añadido al carrito con éxito'}, status=status.HTTP_200_OK)

class RemoveFromCartView(APIView):
    def post(self, request, cart_item_id):
        try:
            cart_item = CartItem.objects.get(id=cart_item_id, cart__user=request.user)
            prenda = cart_item.prenda
            prenda.cantidad_stock += cart_item.quantity
            prenda.save()
            cart_item.delete()
            return Response({'message': 'Producto eliminado del carrito con éxito'}, status=status.HTTP_200_OK)
        except CartItem.DoesNotExist:
            return Response({'error': 'El producto no se encuentra en el carrito.'}, status=status.HTTP_400_BAD_REQUEST)

class CheckoutView(APIView):
    def post(self, request):
        cart = Cart.objects.get(user=request.user)
        cart_items = CartItem.objects.filter(cart=cart)
        if not cart_items.exists():
            return Response({'error': 'El carrito está vacío.'}, status=status.HTTP_400_BAD_REQUEST)
        
        email_message = "Detalles de la compra:\n\n"
        for item in cart_items:
            email_message += f"{item.quantity} x {item.prenda.tipo_prenda} ({item.prenda.marca.nombre}) - {item.prenda.precio_rebajado or item.prenda.precio_original} €\n"
        
        send_mail(
            'Compra realizada',
            email_message,
            settings.DEFAULT_FROM_EMAIL,
            [request.user.email]
        )
        
        cart_items.delete()
        return Response({'message': 'Compra realizada con éxito. Se ha enviado un correo con los detalles.'}, status=status.HTTP_200_OK)