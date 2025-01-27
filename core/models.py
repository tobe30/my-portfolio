from django.db import models

# Create your models here.
class Portfolio(models.Model):
    title = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to="portfolio-images", default="", blank=True, null=True)
    link = models.URLField(max_length=200, blank=True, null=True)
    


    class Meta:
        verbose_name_plural = "Portfolio"

    def __str__(self):
        return self.name