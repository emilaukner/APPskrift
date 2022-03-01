from cgi import test
from unicodedata import category
from django.test import TestCase

from APPskrift.models import Recipe, User, Category, Comment, Evaluation

def create_dummy_users(number_of_users):
    users = []
    for i in range(1, number_of_users + 1):
        users.append(User(username=('user' + str(i)), password='sample', email='something'+ str(i) + '@example.com'))
    return users

def create_dummy_recipe(number_of_recipes):
    recipes = []
    cat = Category(title='Vegetar')
    cat.save()
    for i in range(1, number_of_recipes + 1):
        recipes.append(Recipe(title='food', estimate=1, ingredients='stuff', steps='make the food'))
    return recipes

class CategoryTest(TestCase):
    def test_create_category_yields_category(self):
        """Assert that creating a category yields a valid category"""
        testCategory = Category(title='Vegetar')
        testCategory.save()
        self.assertIs(isinstance(testCategory, Category), True)
        self.assertIs(testCategory.title, 'Vegetar')
        testCategory.delete()

class UserTest(TestCase):
    def test_create_user_yields_user(self):
        """Assert that creating a user yields a valid user"""
        users = create_dummy_users(2)
        user1 = users[0]
        user2 = users[1]
        user1.save()
        user2.save()
        recipes = create_dummy_recipe(2)
        recipe1 = recipes[0]
        recipe1.publishedBy=user1
        recipe1.save()
        recipe2 = recipes[1]
        recipe2.publishedBy=user1
        recipe2.save()
        user2.favorites.add(recipe1)
        user2.favorites.add(recipe2)

        self.assertIsInstance(user2, User)
        self.assertIsNotNone(user2.userId)
        self.assertFalse(user2.admin)
        self.assertEquals(user2.username, 'user2')
        self.assertIs(user2.password, 'sample')
        self.assertEquals(user2.email, 'something2@example.com')
        self.assertFalse(user2.darkMode)
        self.assertEqual(user2.favorites.count(), 2)
        user1.delete()
        user2.delete()

class RecipeTest(TestCase):
    def test_create_recipe_yields_valid_recipe(self):
        """Assert that creating a recipe created a valid recipe"""
        user = create_dummy_users(1)[0]
        user.save()
        testCategory = Category(title='Vegetar')
        testCategory.save()
        recipe = Recipe(title='Food', difficulty='H', estimate=10, ingredients='Lots of stuff', steps='Make it with the stuff', publishedBy=user)
        self.assertEquals(recipe.title, 'Food')
        self.assertEquals(recipe.difficulty, 'H')
        self.assertIs(recipe.estimate, 10)
        self.assertEquals(recipe.ingredients, 'Lots of stuff')
        self.assertEquals(recipe.steps, 'Make it with the stuff')
        self.assertIs(recipe.publishedBy, user)
        user.delete()

    def test_delete_publisher_deletes_recipe(self):
        """Create a recipe to a user and then deleting the user should delete recipe"""
        user = create_dummy_users(1)[0]
        user.save()
        testCategory = Category(title='Vegetar')
        testCategory.save()
        testRecipe = Recipe(title='DummyDelete', difficulty='H', estimate=10, ingredients='Lots of stuff', steps='Make it with the stuff', publishedBy=user)
        testRecipe.save()
        id = testRecipe.recipeId
        user.delete()
        try: 
            recipe = Recipe.objects.all().get(recipeId=id)
            self.fail('Should not exist')
        except:
            pass

class CommentTest(TestCase):
    def test_create_comment_yields_comment(self):
        """Assert that creating a comment created a valid comment"""
        testUser = create_dummy_users(1)[0]
        testRecipe = create_dummy_recipe(1)[0]
        testRecipe.publishedBy=testUser
        testRecipe.save()
        comment = Comment(commentId=1, comment='Great food', recipe= testRecipe, publishedBy= testUser)
        comment.save()
        self.assertIs(comment.commentId, 1)
        self.assertIs(comment.comment, 'Great food')
        self.assertIs(comment.recipe, testRecipe)
        self.assertIs(comment.publishedBy, testUser)
        testUser.delete()

class EvaluationTest(TestCase):
    def test_create_evaluation_yields_valid_evaluation(self):
        """Assert that creating an evaluation created a valid evaluation"""
        testUser = create_dummy_users(1)[0]
        testUser.save()
        testRecipe = create_dummy_recipe(1)[0]
        testRecipe.publishedBy=testUser
        testRecipe.save()
        evaluation = Evaluation(stars=5, recipe=testRecipe, publishedBy=testUser)
        self.assertIs(evaluation.stars, 5)
        self.assertIs(evaluation.recipe, testRecipe)
        self.assertIs(evaluation.publishedBy, testUser)
        testUser.delete()
