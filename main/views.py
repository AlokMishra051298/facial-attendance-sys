from django.shortcuts import render

# Create your views here.
def index(request):
    print("views called")
    return render(request, 'main/index.html')
def login(request):
    print("views called")
    return render(request, 'main/teacher_login.html')
