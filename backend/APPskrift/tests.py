from django.test import TestCase
from APPskrift.models import Recipe, User, Category, Comment, Evaluation

# Create your tests here.
class RecipeTest(TestCase):
    def test_recipe_was_created_without_category(self):
        """Creating a recipe without a category should result in
        exception when accessing category for recipe"""
        user = User(userId=1, username='sample', password='sample', email='something@example.com', favorits=None)
        recipe = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought', steps='Make some food', publishedBy=user)
        self.AssertIs(recipe.category, False)