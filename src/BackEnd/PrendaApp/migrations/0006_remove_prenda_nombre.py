# Generated by Django 5.0.4 on 2024-04-28 17:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PrendaApp', '0005_prenda_color_prenda_genero_prenda_tipo_prenda_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prenda',
            name='nombre',
        ),
    ]
