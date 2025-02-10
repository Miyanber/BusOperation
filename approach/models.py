from django.db import models
import re
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    groups = None
    user_permissions = None
    
    def __str__(self):
        return f"{self.pk}.{self.get_username()}"


class Busstop(models.Model):
    class Company(models.TextChoices):
        HANSHIN = "hanshin"
        KYOTO_CITY = "kyoto_city"
        HOOP = "hoop"
    
    busstop_name = models.CharField(blank=True, max_length=64)  # バス停名
    bus_company = models.TextField(choices=Company.choices, default=Company.HANSHIN) # バス会社名
    map_link = models.CharField(blank=True, max_length=64) # 地図のリンク(あれば)
    pub_date = models.DateTimeField(auto_now=True)  # 作成日時
    order = models.PositiveSmallIntegerField(default=1)
    
    destinations = None
    
    def setDestinations(self, destinations):
        self.destinations = destinations
    
    def __str__(self):
        return f"{self.order}.{self.busstop_name}({self.bus_company})"


class Destination(models.Model):
    busstop = models.ForeignKey(Busstop, related_name="destinations", on_delete=models.CASCADE)  # どのバス停に対する行先か
    destination_name = models.CharField(blank=True, max_length=64)  # 行先の名称
    approach_url = models.URLField(blank=True, max_length=1000)
    order = models.PositiveSmallIntegerField(default=1)
    systems = None
    
    def setProperName(self):
        if self.busstop.bus_company != Busstop.Company.KYOTO_CITY:
            return ""
        self.systems = self.getSystemsByName()
        if self.systems:
            self.destination_name = self.destination_name.replace(f"({self.systems})", "")
        return ""
    
    def getSystemsByName(self):
        if self.systems == None:
            matchObj = re.search('([A-Z0-9,]{1,})', self.destination_name)
            if(matchObj != None):
                return matchObj.group()
    
    def __str__(self):
        return f"{self.order}.{self.busstop.busstop_name}_{self.destination_name}"
    