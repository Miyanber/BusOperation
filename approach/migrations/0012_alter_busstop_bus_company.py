# Generated by Django 4.2.7 on 2023-12-09 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('approach', '0011_alter_busstop_bus_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='busstop',
            name='bus_company',
            field=models.TextField(choices=[('hanshin', 'Hanshin'), ('kyoto_city', 'Kyoto City'), ('hoop', 'Hoop')], default='hanshin'),
        ),
    ]
