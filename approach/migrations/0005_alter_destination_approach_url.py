# Generated by Django 4.2.7 on 2023-11-11 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('approach', '0004_destination_approach_url_alter_busstop_busstop_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='destination',
            name='approach_url',
            field=models.URLField(blank=True, max_length=1000),
        ),
    ]
