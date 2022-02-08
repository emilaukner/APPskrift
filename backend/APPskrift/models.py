from tkinter import CASCADE
import uuid
from django.db import models

# Create your models here.

class APPSkrift(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class User(models.Model): 
    userId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    admin = models.BooleanField(default=False, blank=False)
    username = models.CharField(max_length=50, unique=True, blank=False)
    email = models.EmailField(max_length=254, unique=True)
    darkMode = models.BooleanField(default=False)
    favorits = models.ForeignKey('Recipe', on_delete=models.CASCADE)

    def _str_(self):
        return self.username

class Recipe(models.Model):
    DIFFICULTIES = (
        ('E', 'Easy'), 
        ('M', 'Medium'),
        ('H', 'Hard'),
    )

    recipeId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    madeBy = models.ForeignKey('User', on_delete=models.CASCADE, blank=False)
    title = models.CharField(max_length=120, blank=False)
    difficulty = models.CharField(max_length=1, choices=DIFFICULTIES, default='E', blank=False)
    estimate = models.IntegerField(blank=False)
    ingredients = models.TextField(blank=False)
    steps = models.TextField(blank=False)
    dateMade = models.DateField(auto_now_add=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, blank=False)

    def _str_(self):
        return self.title

class Category(models.Model): 
    categoryId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50, blank=False)

    def __str__(self): 
        return self.title

class Comment(models.Model):
    commentId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    comment = models.TextField(blank=False)



