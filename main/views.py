from django.shortcuts import render
from main.models import HomePage


def home(request):
    content = HomePage.objects.first()
    return render(request, 'home.html', {'content': content})