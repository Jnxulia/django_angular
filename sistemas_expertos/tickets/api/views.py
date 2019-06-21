from rest_framework import generics , viewsets
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from ..models import Ticket
from .permissions import  AdminAuthenticationPermission
from .serializers import TicketSerializer , UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': user.id , 
            'is_superuser' : user.is_superuser
        })

class UserListView(generics.ListAPIView):
    authentication_classes = (BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,AdminAuthenticationPermission,)
    serializer_class = UserSerializer
    queryset = User.objects.all()

class TicketsListView(generics.ListCreateAPIView):
    authentication_classes = (BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)
    serializer_class = TicketSerializer
    def get_queryset(self):
        user = self.request.user
        if(user.is_superuser):
            return Ticket.objects.all()
        else:
            return Ticket.pendientes.filter(usuario=user)

class TicketDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = (BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,AdminAuthenticationPermission,)
    queryset = Ticket.objects.all()

    serializer_class = TicketSerializer


class TicketsPendientesListView(generics.ListAPIView):
    authentication_classes = (BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)
    serializer_class = TicketSerializer
    def get_queryset(self):
        user = self.request.user
        return Ticket.pendientes.filter(usuario=user)

class TicketsAbiertosListView(generics.ListAPIView):
    authentication_classes = (BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)
    serializer_class = TicketSerializer
    def get_queryset(self):
        user = self.request.user
        return Ticket.abiertos.filter(usuario=user)

