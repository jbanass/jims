# Generated by Django 2.1.7 on 2019-05-05 20:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('companies', '0002_auto_20190504_2331'),
        ('inventoryitems', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InventoryItemComponent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('created', models.DateTimeField(editable=False)),
                ('modified', models.DateTimeField(editable=False)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='companies.Company')),
                ('inventory_item', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='inventoryitems.InventoryItem')),
            ],
        ),
    ]
