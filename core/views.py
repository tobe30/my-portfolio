from django.shortcuts import render
from core.models import Portfolio

# Create your views here.
def index(request):
    
    portfolio = Portfolio.objects.all()
    
    context = {
        "portfolio": portfolio
    }
    
    return render(request, "core/index.html", context)