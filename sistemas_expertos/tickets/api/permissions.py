from rest_framework import authentication 
from rest_framework.permissions import BasePermission

class AdminAuthenticationPermission(BasePermission):
    ADMIN_ONLY_AUTH_CLASSES = [authentication.BasicAuthentication, authentication.SessionAuthentication]

    def has_permission(self, request, view):
        user = request.user
        if user and user.is_authenticated():
            return user.is_superuser 
        return False