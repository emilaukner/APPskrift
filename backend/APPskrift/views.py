from django.shortcuts import render
from rest_framework import viewsets
from .serializers import APPSkriftSerializer
from .models import APPSkrift

# Create your views here.

class APPskriftView(viewsets.ModelViewSet):
    serializer_class = APPSkriftSerializer
    queryset = APPSkrift.objects.all()
