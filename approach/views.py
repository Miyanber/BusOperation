from django.shortcuts import render
from django.db.models import Subquery, OuterRef, JSONField
from django.db import models
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Busstop, Destination

# Create your views here.
class BusstopListView(LoginRequiredMixin, ListView):
    template_name = 'approach/index.html'
    model = Busstop
    context_object_name = 'busstops'
    # paginate_by = 10 取得制限
    
    def get_queryset(self):
        return super().get_queryset().order_by("order").prefetch_related("destinations")
    
    def get_context_data(self):
        context = super().get_context_data()
        context["Company"] = Busstop.Company
        return context
