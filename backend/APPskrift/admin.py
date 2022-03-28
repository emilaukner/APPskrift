from django.contrib import admin

from .models import *

# Register your models here.
class UserAdmin(admin.ModelAdmin):
	list_display = ["username", "email"]

class RecipeAdmin(admin.ModelAdmin):
	list_display = ["title", "recipeId"]

admin.site.register(User, UserAdmin)
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(Evaluation)


