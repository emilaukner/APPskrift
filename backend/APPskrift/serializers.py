from rest_framework import serializers
from .models import User, Recipe

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('userId', 'admin', 'username', 'password', 'email', 'darkMode', 'favorites')

class RecipeSerializer(serializers.ModelSerializer):
		class Meta:
				model = Recipe
				fields = (
					"recipeId",
					"title",
					"difficulty",
					"estimate",
					"ingredients",
					"steps",
					"dateMade",
					"category",
					"publishedBy"
				)