# Generated by Django 5.0.4 on 2024-04-28 17:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PrendaApp', '0003_alter_prenda_precio_rebajado'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prenda',
            name='color',
        ),
        migrations.RemoveField(
            model_name='prenda',
            name='genero',
        ),
        migrations.RemoveField(
            model_name='prenda',
            name='tipo_prenda',
        ),
    ]
