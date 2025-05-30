from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import render, redirect
from core.models import Portfolio
from django.contrib import messages
from .forms import ContactMessageForm  # make sure this is imported

# Create your views here.
def index(request):
    
    portfolio = Portfolio.objects.all()[:2]
    
    context = {
        "portfolio": portfolio
    }
    
    return render(request, "core/index.html", context)


def portfolio(request):
    
    portfolio = Portfolio.objects.all()
    
    context = {
        "portfolio": portfolio
    }
    
    return render(request, "core/portfolio.html", context)

def contact(request):
    if request.method == "POST":
        form = ContactMessageForm(request.POST)
        if form.is_valid():
            contact = form.save()
            
            # Send email
            subject = "Need a Website? User Contacted You!"
            message = f"""
            Name: {contact.name}
            Email: {contact.email}
            Phone: {contact.phone}
            Message:
            {contact.message}
            """
            send_mail(
                subject,
                message,
                settings.EMAIL_HOST_USER,
                ['tobemarizu@gmail.com'],  # or any recipient email
                fail_silently=False,
            )
            
            messages.success(request, "Your message has been sent successfully! We will get back to you soon.")
            return redirect('core:contact')  # Redirect to the same page to avoid resubmission
    else:
        form = ContactMessageForm() 
    return render(request, "core/contact.html", {'form': form})