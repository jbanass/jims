# Generated by Django 2.1.7 on 2019-05-05 20:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('materials', '0001_initial'),
        ('inventoryitemcomponents', '0001_initial'),
        ('vendors', '0002_auto_20190505_1535'),
    ]

    operations = [
        migrations.AddField(
            model_name='inventoryitemcomponent',
            name='material',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='materials.Material'),
        ),
        migrations.AddField(
            model_name='inventoryitemcomponent',
            name='vendor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='vendors.Vendor'),
        ),
    ]
