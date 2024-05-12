"""
URL configuration for DjangoApp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from prendaApp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    
    
    path('api/prendas/', PrendaCreateView.as_view(), name='prenda-create-list'),
    path('prendas/<str:tipo_prenda>/', PrendaTipoListView.as_view(), name='prendas-tipo'),
    path('api/prendas/<int:id>/', PrendaRetrieveView.as_view(), name='prenda-detail'),
    path('api/prendas/rebajadas/', PrendasConDescuentoView.as_view(), name='prendas-rebajas'),
    path('api/prendas/novedades/', NovedadesListView.as_view(), name='prendas-novedades'),

    
    path('api/marcas/', MarcaCreateView.as_view(), name='marca-create-list'),
    path('api/noticias/', NoticiaCreateView.as_view(), name='noticia-create-list'),
]
