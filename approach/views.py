from django.shortcuts import render
from django.db.models import Subquery, OuterRef, JSONField
from django.db import models

from .models import Busstop, Destination

# Create your views here.
def index(request):
    busstops = Busstop.objects.order_by("order")
    # .annotate(
    #     destination_ids = Subquery(
    #         Destination.objects.filter(busstop__pk=OuterRef("pk")).order_by("order").values_list("pk", flat=True).__len__()
    #     )
    # )
    busstop_dicts = []
    
    for busstop in busstops :
        busstop_dict = {
            "busstop": busstop,
            "destinations": Destination.objects.filter(busstop__pk=busstop.pk).order_by("order").all()
            }
        busstop_dicts.append(busstop_dict) 
    
    context = {
        "busstop_dicts": busstop_dicts,
        "Company": Busstop.Company
    }
    return render(request, "approach/index.html", context)