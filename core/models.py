from django.db import models
from django.utils import timezone
# Create your models here.
class Portfolio(models.Model):
    title = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to="portfolio-images", default="", blank=True, null=True)
    link = models.URLField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    


    class Meta:
        verbose_name_plural = "Portfolio"

    def __str__(self):
        return self.name
    
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name