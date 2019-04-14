from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import MovieSerializer
from .models import Movie


class MovieViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = MovieSerializer