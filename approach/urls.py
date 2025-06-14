from django.urls import path

from . import views

app_name = "approach"
urlpatterns = [
    path('', views.BusstopListView.as_view(), name="index"),
    path('login/', views.CustomLoginView.as_view(), name="login")
]
