from django.urls import path

from . import views

app_name = "approach"
urlpatterns = [
    path('', views.index, name="index")
]
