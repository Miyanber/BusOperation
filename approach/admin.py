from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from .models import Busstop, Destination, CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_staff')
    search_fields = ('username', 'email')


admin.site.register(Busstop)
admin.site.register(Destination)