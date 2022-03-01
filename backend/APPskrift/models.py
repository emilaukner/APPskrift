from tkinter import CASCADE
from tokenize import blank_re
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
    password = models.CharField(max_length=50, blank=False)
    email = models.EmailField(max_length=254, unique=True)
    darkMode = models.BooleanField(default=False)
    favorites = models.ManyToManyField('Recipe', blank=True, related_name="favorite")
    saved = models.ManyToManyField('Recipe', blank=True, related_name="saved")

    def _str_(self):
        return self.username

class Recipe(models.Model):
    DIFFICULTIES = (
        ('E', 'Easy'), 
        ('M', 'Medium'),
        ('H', 'Hard'),
    )
    COUSINES = [
        ("Europeisk", "Europeisk"),
        ("Asiatisk", "Asiatisk"),
        ("Fransk", "Fransk"),
        ("Amerikansk", "Amerikansk"),
        ("Indisk", "Indian"),
        ("Annet", "Annet")
	]

    TIME_ESTIMATES = [
        ("15 min", "15 min"),
        ("30 min", "30 min"),
        ("45 min", "45 min"),
        ("1 time", "1 hour"),
        ("Over 1 time", "Over 1 time")
    ]

    MEALS = [
        ("Frokost", "Frokost"),
        ("Lunsj", "Lunsj"),
        ("Middag", "Middag")
    ]

    recipeId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=120, blank=False)
    difficulty = models.CharField(max_length=1, choices=DIFFICULTIES, default='E', blank=False)
    ingredients = models.TextField(blank=False)
    steps = models.TextField(blank=False)
    dateMade = models.DateField(auto_now_add=True)
    cousine = models.CharField(max_length=255, choices=COUSINES, default="Annet", blank=False)
    estimate = models.CharField(max_length=255, choices=TIME_ESTIMATES, default="15 min", blank=False)
    meal = models.CharField(max_length=255, choices=MEALS, default="Middag", blank=False)
    categories = models.ManyToManyField('Category', blank=True, related_name="categories")
    publishedBy = models.ForeignKey('User', on_delete=models.CASCADE, null=True)
    image = models.ImageField(max_length=5242880)

    def _str_(self):
        return self.title

class Category(models.Model): 
    title = models.CharField(primary_key=True, editable=True, max_length=255)

    def __str__(self): 
        return self.title

class Comment(models.Model):
    commentId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    comment = models.TextField(blank=False)
    dateTimeMade = models.DateTimeField(auto_now_add=True)
    recipe = models.ForeignKey('Recipe', on_delete=models.CASCADE, blank=False)
    publishedBy = models.ForeignKey('User', on_delete=models.CASCADE, blank=False)
    
    def __str__(self): 
        return self.commentId

class Evaluation(models.Model): 
    stars = models.IntegerField()
    recipe = models.ForeignKey('Recipe', on_delete=models.CASCADE, blank=False)
    publishedBy = models.ForeignKey('User', on_delete=models.CASCADE, blank=False)

    def __str__(self): 
        return self.stars


