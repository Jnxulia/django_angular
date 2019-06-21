from rest_framework import serializers
from django.contrib.auth.models import User
from ..models import Ticket

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id','username', 'email')

class TicketSerializer(serializers.ModelSerializer):
    user_detail = UserSerializer(read_only=True, source='usuario')
    class Meta:
        model = Ticket
        fields = ('id', 'titulo', 'descripcion' ,'estado','fecha_creacion' , 'usuario', 'user_detail')



        