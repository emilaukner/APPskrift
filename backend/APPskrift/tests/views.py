import json

from rest_framework import status
from rest_framework.test import APITestCase

from APPskrift.serializers import *
from APPskrift.serializers import *

class RecipeTestCase(APITestCase):

	def setUp(self):
		self.recipe = Recipe.objects.create(title='food', estimate=1, ingredients='stuff', steps='make the food')

	def test_creation(self):
		data = {
			"title": "Test",
			"difficulty": "E",
			"estimate": 10,
			"ingredients": "Banan",
			"steps": "1. Spis",
			"category": "",
			"publishedBy": ""
		}

		response = self.client.post("/recipes/", data)
		self.assertEqual(response.status_code, status.HTTP_201_CREATED)
	
	def test_detail_view(self):
		response = self.client.get("/recipes/" + str(self.recipe.recipeId.hex) + "/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(response.data["title"], "food")
	
	def test_list_view(self):
		response = self.client.get("/recipes/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)

	def test_delete_view(self):
		response = self.client.get("/recipes/" + str(self.recipe.recipeId.hex) + "/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)

		try: 
				recipe = Recipe.objects.all().get(recipeId=self.recipe.recipeId)
				self.fail('Should not exist')
		except:
				pass

class UserViewTestCase(APITestCase):
	def setUp(self):
		self.favorite = Recipe.objects.create(title='favorite', estimate=1, ingredients='stuff', steps='make the food')
		self.saved = Recipe.objects.create(title='saved', estimate=1, ingredients='stuff', steps='make the food')
		self.user = User.objects.create(username="user", password='password', email='user@email.com')

		self.user.favorites.add(self.favorite)
		self.user.saved.add(self.saved)


	def test_creation(self):
		data = {
			"username": "test",
			"password": "pass",
			"email": "test@email.com"
		}

		response = self.client.post("/users/", data)
		self.assertEqual(response.status_code, status.HTTP_201_CREATED)
	
	def test_detail_view(self):
		response = self.client.get("/users/" + str(self.user.userId.hex) + "/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(response.data["username"], "user")
	
	def test_list_view(self):
		response = self.client.get("/recipes/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)

	def test_delete_view(self):
		response = self.client.get("/users/" + str(self.user.userId.hex) + "/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)

		try: 
				user = User.objects.all().get(userId=self.user.userId)
				self.fail('Should not exist')
		except:
				pass
	
	def test_get_favorites(self):
		response = self.client.get("/users/" + str(self.user.userId.hex) + "/favorites/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(response.data[0], self.user.favorites.get(recipeId=self.favorite.recipeId).recipeId)

	def test_add_favorites(self):
		new_favorite = Recipe.objects.create(title='new favorite', estimate=1, ingredients='stuff', steps='make the food')
		response = self.client.post("/users/" + str(self.user.userId.hex) + "/favorites/", {
			"id": str(new_favorite.recipeId)
		})
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(self.user.favorites.get(recipeId=new_favorite.recipeId).title, "new favorite")

	def test_get_saved(self):
		response = self.client.get("/users/" + str(self.user.userId.hex) + "/saved/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(response.data[0], self.user.saved.get(recipeId=self.saved.recipeId).recipeId)

	def test_add_saved(self):
		new_saved = Recipe.objects.create(title='new saved', estimate=1, ingredients='stuff', steps='make the food')
		response = self.client.post("/users/" + str(self.user.userId.hex) + "/saved/", {
			"id": str(new_saved.recipeId)
		})
		self.assertEqual(response.status_code, status.HTTP_200_OK)

		self.assertEqual(self.user.saved.get(recipeId=new_saved.recipeId).title, "new saved")