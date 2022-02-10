from unicodedata import category
from django.test import TestCase
from APPskrift.models import Recipe, User, Category, Comment, Evaluation
from django.core.exceptions import ObjectDoesNotExist

# Create your tests here.
class CategoryTest(TestCase):
    def test_create_category_yields_category(self):
        """Assert that creating a category yields a valid category"""
        testCategory = Category(categoryId=1, title='Vegetarian')
        self.assertIs(isinstance(testCategory, Category), True)
        self.assertIs(testCategory.categoryId, 1)
        self.assertIs(testCategory.title, 'Vegetarian')

class UserTest(TestCase):
    def test_create_user_yields_user(self):
        """Assert that creating a user yields a valid user"""
        cat = Category(categoryId=1, title='Food')
        recipe1 = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', category=cat,publishedBy=None)
        recipe2 = Recipe(recipeId=2, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', category=cat,publishedBy=None)
        user = User(userId=1, username='sample', password='sample', email='something@example.com', favorites=[recipe1, recipe2])
        self.assertIsInstance(user, User)
        self.assertIs(user.userId, 1)
        self.assertFalse(user.admin)
        self.assertIs(user.username, 'sample')
        self.assertIs(user.password, 'sample')
        self.assertIs(user.email, 'something@example.com')
        self.assertFalse(user.darkMode)
        self.assertIs(user.favorites, recipe1, recipe2)


class RecipeTest(TestCase):
    def test_recipe_was_created_without_category(self):
        """Creating a recipe without a category should result in
        no category for the recipe"""
        user = User(userId=1, username='sample', password='sample', email='something@example.com', favorites=None)
        recipe = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', publishedBy=user)
        self.assertIs(hasattr(recipe, 'category'), False)

    def test_recipe_was_created_with_category(self):
        """Creating a recipe with a category should return the correct category"""
        user = User(userId=1, username='sample', password='sample', email='something@example.com', favorites=None)
        cat = Category(categoryId=1, title='Food')
        recipe = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', category=cat,publishedBy=user)
        self.assertIs(isinstance(recipe.category, Category), True)
        self.assertIs(recipe.category, cat)

class 