from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from .serializers import UserSerializer, RecipeSerializer, CategorySerializer, CommentSerializer, EvaluationSerializer
from .models import User, Recipe, Category, Comment, Evaluation

from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response

from django.http import HttpResponse, JsonResponse

# Using ModelViewSet. See https://testdriven.io/blog/drf-views-part-3/ for details

class UserView(viewsets.ModelViewSet):
	serializer_class = UserSerializer
	queryset = User.objects.all()

class RecipeView(viewsets.ModelViewSet):
	serializer_class = RecipeSerializer
	queryset = Recipe.objects.all()

class CategoryView(viewsets.ModelViewSet): 
	serializer_class = CategorySerializer
	queryset = Category.objects.all()

class CommentView(viewsets.ModelViewSet):
	serializer_class = CommentSerializer
	queryset = Comment.objects.all()

class EvaluationView(viewsets.ModelViewSet):
	serializer_class = EvaluationSerializer
	queryset = Evaluation.objects.all()