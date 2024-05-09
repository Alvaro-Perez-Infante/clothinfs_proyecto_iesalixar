from django.urls import path
from .views import RopaCreateAPIView

urlpatterns = [
    path('ropa/', RopaCreateAPIView.as_view(), name='ropa-list-create'),
]
