from django.db import models

# Create your models here.
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
    
    def __str__(self):
        return f"{self.order}.{self.busstop_name}({self.bus_company})"


class Destination(models.Model):
    busstop = models.ForeignKey(Busstop, on_delete=models.CASCADE)  # どのバス停に対する行先か
    destination_name = models.CharField(blank=True, max_length=64)  # 行先の選択肢python manage.py createsuperuser
    approach_url = models.URLField(blank=True, max_length=1000)
    order = models.PositiveSmallIntegerField(default=1)
    
    def __str__(self):
        return f"{self.order}.{self.busstop.busstop_name}_{self.destination_name}"
    