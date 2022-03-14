from django.contrib import admin

from .models import *

# Register your models here.

admin.site.register(User)
admin.site.register(Recipe)
admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(Evaluation)
admin.site.register(Foods)


