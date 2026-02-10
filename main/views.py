from django.shortcuts import render
from main.models import HomePage


def home(request):
    homepage_data = HomePage.objects.first()
    return render(request, 'home.html', {'homepage': homepage_data})