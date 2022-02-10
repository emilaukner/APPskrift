from django.urls import path
from APPskrift import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('users/', views.UserView.as_view(), name='users'),
	path('recipes/', views.RecipeView.as_view(), name="recipes"),
	path('categories/', views.CategoryView().as_view(), name="categories"), 
	path('comments/', views.CommentView().as_view(), name="comments"),
	path('evaluations/', views.EvaluationView().as_view(), name="evaluation")
]

urlpatterns = format_suffix_patterns(urlpatterns)