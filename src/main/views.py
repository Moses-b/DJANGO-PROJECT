from django.http import HttpResponse
from django.shortcuts import render

def landing_page(request):
    return render(request, 'views/main.htm', {"name": "Landing Page"})



