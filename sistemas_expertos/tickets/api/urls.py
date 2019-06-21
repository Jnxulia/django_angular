from django.conf.urls import url, include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
print(router.urls)


urlpatterns = [
    url(r'^usuarios/$', views.UserListView.as_view(), name='user_listViews'),
    url(r'^tickets/$', views.TicketsListView.as_view(), name='ticket_lists_all'),
    url(r'^tickets/abiertos/$', views.TicketsAbiertosListView.as_view(), name='tickets_abiertos'),
    url(r'^tickets/pendientes/$', views.TicketsPendientesListView.as_view(), name='tickets_pendientes'),
    url(r'^tickets/(?P<pk>[0-9]+)/$', views.TicketDetail.as_view()),
    url(r'^token/login/', views.CustomAuthToken.as_view()),
]

