# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-06-19 16:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0002_auto_20190619_1248'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='estado',
            field=models.CharField(choices=[(b'abierto', b'Abierto'), (b'pendiente', b'Pendiente'), (b'proceso', b'En Proceso'), (b'resuelto', b'Resuelto'), (b'cerrado', b'Cerrado')], default=b'abierto', max_length=10),
        ),
    ]
