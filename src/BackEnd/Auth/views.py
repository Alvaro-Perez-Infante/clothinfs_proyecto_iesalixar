from django.shortcuts import get_object_or_404, render
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from django.contrib.auth.models import User
from .serializers import *

class UserCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers

class UserLoginView(APIView):
    def post(self, request):
        # Obtener las credenciales del usuario desde la solicitud
        username = request.data.get('username')
        password = request.data.get('password')

        # Obtener el usuario correspondiente al nombre de usuario proporcionado
        user = User.objects.filter(username=username).first()

        # Verificar si el usuario existe y si la contraseña es correcta
        if password==user.password:
            # Usuario autenticado correctamente
            return Response({'message': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
        else:
            # Credenciales inválidas
            return Response({'error': 'Nombre de usuario o contraseña incorrectos'}, status=status.HTTP_400_BAD_REQUEST)
        
        
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def create_admin_user(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({"error": "Username and password are required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create_superuser(username=username, password=password)
        return Response({"message": "Admin user created successfully."}, status=status.HTTP_201_CREATED)
