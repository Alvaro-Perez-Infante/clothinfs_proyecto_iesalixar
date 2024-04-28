from django.db import models

class Prenda(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    marca_choices = [
        ('Bleu Ciel', 'Bleu Ciel'),
        ('Down Under', 'Down Under'),
        ('Drake Urban', 'Drake Urban'),
        ('Effects', 'Effects'),
        ('Esenzia', 'Esenzia'),
        ('Goated', 'Goated'),
        ('Half Studios', 'Half Studios'),
        ('Heartbreak Hotel', 'Heartbreak Hotel'),
        ('Horizon Studios', 'Horizon Studios'),
        ('Humpier', 'Humpier'),
        ('Jesper', 'Jesper'),
        ('Les Gars', 'Les Gars'),
        ('NWHR', 'NWHR'),
        ('Old School', 'Old School'),
        ('Otherlife', 'Otherlife'),
        ('Shameless Collective', 'Shameless Collective'),
        ('Signal', 'Signal'),
        ('Sonder Stories', 'Sonder Stories'),
        ('Stooner', 'Stooner'),
        ('Takkra', 'Takkra'),
    ]
    marca = models.CharField(max_length=50, choices=marca_choices)
    descripcion = models.TextField(max_length=100)
    talla_choices = [
        ('XS', 'XS'),
        ('S', 'S'),
        ('M', 'M'),
        ('L', 'L'),
        ('XL', 'XL'),
        ('XXL', 'XXL'),
    ]
    talla = models.CharField(max_length=3, choices=talla_choices)
    cantidad_stock = models.PositiveIntegerField(default=0)
    material_choices = [
        ('Algodón', 'Algodón'),
        ('Poliéster', 'Poliéster'),
        ('Lino', 'Lino'),
        ('Lana', 'Lana'),
        ('Seda', 'Seda'),
        ('Nylon', 'Nylon'),
        ('Lycra', 'Lycra'),
    ]
    material = models.CharField(max_length=50, choices=material_choices)
    precio_original = models.DecimalField(max_digits=10, decimal_places=2)
    precio_rebajado = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    fecha_novedad = models.DateTimeField(auto_now_add=True, auto_now=False)
    tipo_prenda_choices = [
        ('Abrigos y Chaquetas', 'Abrigos y Chaquetas'),
        ('Bañadores', 'Bañadores'),
        ('Bolsas', 'Bolsas'),
        ('Bolsos', 'Bolsos'),
        ('Braga', 'Braga'),
        ('Calcetines', 'Calcetines'),
        ('Calzado', 'Calzado'),
        ('Camisas', 'Camisas'),
        ('Camisetas', 'Camisetas'),
        ('Camisetas de Tirantes', 'Camisetas de Tirantes'),
        ('Camisetas Manga Larga', 'Camisetas Manga Larga'),
        ('Chalecos', 'Chalecos'),
        ('Faldas', 'Faldas'),
        ('Gorras', 'Gorras'),
        ('Gorros', 'Gorros'),
        ('Jerséis', 'Jerséis'),
        ('Pantalón Corto', 'Pantalón Corto'),
        ('Pantalón Largo', 'Pantalón Largo'),
        ('Polares', 'Polares'),
        ('Polo Manga Larga', 'Polo Manga Larga'),
        ('Polos', 'Polos'),
        ('Sudaderas con Capucha', 'Sudaderas con Capucha'),
        ('Sudaderas con Cremallera', 'Sudaderas con Cremallera'),
        ('Sudaderas sin Capucha', 'Sudaderas sin Capucha'),
        ('Top', 'Top'),
        ('Vestidos', 'Vestidos'),
        ('Zapatillas', 'Zapatillas'),
    ]
    tipo_prenda = models.CharField(max_length=50, choices=tipo_prenda_choices)
    color_choices = [
        ('Amarillo', 'Amarillo'),
        ('Azul', 'Azul'),
        ('Azul Celeste', 'Azul Celeste'),
        ('Azul Eléctrico', 'Azul Eléctrico'),
        ('Azul Marino', 'Azul Marino'),
        ('Azul Oscuro', 'Azul Oscuro'),
        ('Azul Turquesa', 'Azul Turquesa'),
        ('Beige', 'Beige'),
        ('Blanco', 'Blanco'),
        ('Blanco Roto', 'Blanco Roto'),
        ('Blanco y Negro', 'Blanco y Negro'),
        ('Caqui', 'Caqui'),
        ('Coral', 'Coral'),
        ('Granate', 'Granate'),
        ('Gris', 'Gris'),
        ('Gris Oscuro', 'Gris Oscuro'),
        ('Lila', 'Lila'),
        ('Marrón', 'Marrón'),
        ('Multicolor', 'Multicolor'),
        ('Naranja', 'Naranja'),
        ('Negro', 'Negro'),
        ('Oro', 'Oro'),
        ('Plata', 'Plata'),
        ('Rojo', 'Rojo'),
        ('Rosa', 'Rosa'),
        ('Verde', 'Verde'),
        ('Verde Oscuro', 'Verde Oscuro'),
    ]
    color = models.CharField(max_length=20, choices=color_choices)
    genero_choices = [
        ('Hombre', 'Hombre'),
        ('Mujer', 'Mujer'),
        ('Niño', 'Niño'),
        ('Niña', 'Niña'),
    ]
    genero = models.CharField(max_length=6, choices=genero_choices)

    def __str__(self):
        return self
    class Meta:
        verbose_name='Prenda'
        verbose_name_plural='Prendas'

