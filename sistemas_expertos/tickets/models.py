# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User

class AbiertoManager(models.Manager):
    def get_queryset(self):
        return super(AbiertoManager, self).get_queryset().filter(estado='abierto')
class PendienteManager(models.Manager):
    def get_queryset(self):
        return super(PendienteManager, self).get_queryset().filter(estado='pendiente')      
class ProcesoManager(models.Manager):
    def get_queryset(self):
        return super(ProcesoManager, self).get_queryset().filter(estado='proceso')    
class ResueltosManager(models.Manager):
    def get_queryset(self):
        return super(ResueltoManager, self).get_queryset().filter(estado='resuelto')      
class CerradosManager(models.Manager):
    def get_queryset(self):
        return super(CerradoManager, self).get_queryset().filter(estado='cerrado')          
class Ticket(models.Model):
    STATUS_CHOICES = (
        ('abierto'   , 'Abierto '),
        ('pendiente' , 'Pendiente'),
        ('proceso'   , 'En Proceso'),
        ('resuelto'  , 'Resuelto'),
        ('cerrado'   , 'Cerrado')
    )
    usuario        = models.ForeignKey(User, related_name='ticket_creado')
    titulo         = models.CharField(max_length=200)
    descripcion    = models.TextField()
    estado         = models.CharField(max_length=10, choices=STATUS_CHOICES, default='abierto')
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    abiertos   = AbiertoManager()
    pendientes = PendienteManager()
    procesos   = ProcesoManager()
    resueltos  = ResueltosManager()
    cerrados   = CerradosManager()
    objects    = models.Manager()  

    class Meta:
        ordering = ('-fecha_creacion',)

    def __str__(self):
        return "titulo[{}] estado[{}]".format(self.titulo, self.estado) 
