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
        user1 = User(userId=1, username='sample', password='sample', email='something@example.com')
        user1.save()
        recipe1 = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', category=cat,publishedBy=user1)
        recipe1.save()
        recipe2 = Recipe(recipeId=2, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', category=cat,publishedBy=user1)
        recipe2.save()
        user2 = User(userId=2, username='sample', password='sample', email='something@example.com')
        user2.favorites.add(recipe1)
        user2.favorites.add(recipe2)


        self.assertIsInstance(user2, User)
        self.assertIs(user2.userId, 1)
        self.assertFalse(user2.admin)
        self.assertIs(user2.username, 'sample')
        self.assertIs(user2.password, 'sample')
        self.assertIs(user2.email, 'something@example.com')
        self.assertFalse(user2.darkMode)
        self.assertIs(user2.favorites, recipe1, recipe2)


class RecipeTest(TestCase):
    def test_recipe_was_created_without_category(self):
        """Creating a recipe without a category should result in no category for the recipe"""
        user = User(userId=1, username='sample', password='sample', email='something@example.com')
        recipe = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', publishedBy=user)
        self.assertIs(hasattr(recipe, 'category'), False)

    def test_recipe_was_created_with_category(self):
        """Creating a recipe with a category should return the correct category"""
        user = User(userId=1, username='sample', password='sample', email='something@example.com')
        cat = Category(categoryId=1, title='Food')
        recipe = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', category=cat,publishedBy=user)
        self.assertIs(isinstance(recipe.category, Category), True)
        self.assertIs(recipe.category, cat)

class CommentTest(TestCase):
    def test_create_comment_yields_comment(self):
        """Assert that creating a comment created a valid comment"""
        testUser = User(userId=1, username='sample', password='sample', email='something@example.com')
        testRecipe = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
         steps='Make some food', publishedBy=testUser)
        comment = Comment(commentId=1, comment='Great food', recipe= testRecipe, user = testUser)
        self.assertIs(comment.commentId, 1)
        self.assertIs(comment.comment, 'Great food')
        self.assertIs(comment.recipe, testRecipe)
        self.assertIs(comment.user, testUser)

class EvaluationTest(TestCase):
    def test_create_evaluation_yields_valid_evaluation(self):
        """Assert that creating an evaluation created a valid evaluation"""
        testUser = User(userId=1, username='sample', password='sample', email='something@example.com')
        testRecipe = Recipe(recipeId=1, title='TestRecipe', difficulty='E', estimate=1, ingredients='food for thought',
        steps='Make some food', publishedBy=testUser)
        evaluation = Evaluation(stars=5, recipe=testRecipe, user=testUser)
        self.assertIs(evaluation.stars, 5)
        self.assertIs(evaluation.recipe, testRecipe)
        self.assertIs(evaluation.user, testUser)
