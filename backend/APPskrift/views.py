from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from .serializers import UserSerializer, RecipeSerializer, CategorySerializer, CommentSerializer, EvaluationSerializer
from .models import User, Recipe, Category, Comment, Evaluation

from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action

from django.http import HttpResponse, JsonResponse

# Using ModelViewSet. See https://testdriven.io/blog/drf-views-part-3/ for details

class UserView(viewsets.ModelViewSet):
	serializer_class = UserSerializer
	queryset = User.objects.all()

	@action(methods=['get'], detail=True)
	def favorites(self, request, pk=True):
		user = get_object_or_404(User, pk=self.kwargs.get("pk"))
		data = UserSerializer(user, many=False).data
		favorites = data["favorites"]
		print(favorites)
		return Response(favorites)
	
	@favorites.mapping.post
	def add_favorites(self, request, pk=True):
		recipe_pk = request.data["id"]
		print(recipe_pk)
		user = self.get_object()
		recipe = get_object_or_404(Recipe, pk=recipe_pk)
		user.favorites.add(recipe)
		return Response("Nice", status=200)

	@action(methods=['get'], detail=True)
	def saved(self, request, pk=True):
		user = get_object_or_404(User, pk=self.kwargs.get("pk"))
		data = UserSerializer(user, many=False).data
		saved = data["saved"]
		print(saved)
		return Response(saved)
	
	@saved.mapping.post
	def add_saved(self, request, pk=True):
		print(request.data)
		saved_pk = request.data["id"]
		print(saved_pk)
		user = self.get_object()
		recipe = get_object_or_404(Recipe, pk=saved_pk)
		user.saved.add(recipe)
		return Response("Nice", status=200)


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