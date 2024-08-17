from django.urls import path
from app.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', index, name = 'index'),
    path('projects', projects, name = 'projects'),
    path('about_me', about_me, name = 'about_me'),
    path('contact_me', contact_me, name = 'contact_me')
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)