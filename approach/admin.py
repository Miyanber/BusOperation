from django.contrib import admin

# Register your models here.
from .models import Busstop, Destination

admin.site.register(Busstop)
admin.site.register(Destination)