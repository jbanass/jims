from django.db import models
from django.utils import timezone
from inventoryitems.models import InventoryItem
from companies.models import Company
from vendors.models import Vendor
from materials.models import Material

# Create your models here.


class InventoryItemComponent(models.Model):
    material = models.ForeignKey(Material, on_delete=models.DO_NOTHING)
    inventory_item = models.ForeignKey(
        InventoryItem, on_delete=models.DO_NOTHING)
    vendor = models.ForeignKey(Vendor, on_delete=models.DO_NOTHING)
    company = models.ForeignKey(Company, on_delete=models.DO_NOTHING)
    quantity = models.IntegerField()
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(InventoryItemComponent, self).save(*args, **kwargs)
