# Generated by Django 4.2.7 on 2024-02-03 05:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('approach', '0014_remove_destination_system_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='destination',
            name='busstop',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='destinations', to='approach.busstop'),
        ),
    ]
