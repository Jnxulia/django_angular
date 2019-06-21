# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Ticket
from django.contrib import admin

@admin.register(Ticket)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'estado',  'fecha_creacion' , 'usuario']
    list_filter = ['fecha_creacion', 'estado']
    search_fields = ['titulo','descripcion']


