from django.contrib import admin
from .models import *
from import_export import resources # type: ignore
from import_export.admin import ImportExportModelAdmin # type: ignore

class PrendaResource(resources.ModelResource):
    class Meta:
       model=Prenda

class PrendaAdmin(ImportExportModelAdmin,admin.ModelAdmin):

    search_fields = [
        'id','marca',
    'material', 'tipo_prenda', 
    'color', 'genero'
    ] #Barra de busqueda por titulo

    list_display = (
        'id', 'marca', 'descripcion', 'talla', 'cantidad_stock',
    'material', 'precio_original', 'precio_rebajado', 'fecha_novedad',
    'tipo_prenda', 'color', 'genero'
    ) #Importante la "," nombra las columnas

    resource_class= PrendaResource
    
admin.site.register(Prenda, PrendaAdmin)
