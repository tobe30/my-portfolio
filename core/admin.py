from django.contrib import admin
from core.models import Portfolio

# Register your models here.


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ['title', 'name', 'image']

# Register the models with their corresponding admin classes
admin.site.register(Portfolio, PortfolioAdmin)
