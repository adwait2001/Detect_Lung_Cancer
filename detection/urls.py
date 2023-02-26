from django.urls import path
from django.contrib import admin
from detection import views
 
urlpatterns = [
    path('api/', views.Ctscan_list),
    path('update/<int:pk>', views.Ctscan_result),
    path('result/<int:pk>', views.getResult),
]