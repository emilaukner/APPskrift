from rest_framework import serializers
from .models import Category, Comment, Evaluation, User, Recipe

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
                "userId", 
                "admin", 
                "username", 
                "password", 
                "email", 
                "darkMode", 
                "favorites",
								"saved"
            )

class RecipeSerializer(serializers.ModelSerializer):
		class Meta:
				model = Recipe
				fields = (
					"recipeId",
					"title",
					"difficulty",
					"ingredients",
					"steps",
					"dateMade",
                    "cousine",
                    "estimate",
                    "meal",
					"categories",
					"publishedBy"
				)
                
class CategorySerializer(serializers.ModelSerializer):
        class Meta: 
            model = Category
            fields = (
                "title",
            )

class CommentSerializer(serializers.ModelSerializer):
        class Meta: 
            model = Comment
            fields = (
                "commentId", 
                "comment", 
                "dateTimeMade", 
                "recipe",
                "user"
            )

class EvaluationSerializer(serializers.ModelSerializer):
        class Meta:
            model = Evaluation
            fields = (
                "stars", 
                "recipe",
                "user"
            )
