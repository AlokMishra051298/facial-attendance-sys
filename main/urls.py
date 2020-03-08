from django.urls import path
from django.views.generic import TemplateView
from . import views
print("url called")
urlpatterns = [
    path('', views.index, name='index'),
    #path('teacher_login/', views.login, name='login'),
    path('teacher_login/', TemplateView.as_view(template_name='main/teacher_login.html')),
    path('stud_login/', TemplateView.as_view(template_name='main/stud_login.html'))
]
