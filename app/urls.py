from django.urls import path
from app.views import *

urlpatterns = [
    path('', index, name = 'index'),
    path('projects', projects, name = 'projects'),
    path('about_me', about_me, name = 'about_me'),
    path('contact_me', contact_me, name = 'contact_me')
]