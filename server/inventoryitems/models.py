from django.db import models
from django.utils import timezone
from companies.models import Company
from inventorytypes.models import InventoryType

# Create your models here.


class InventoryItem(models.Model):
    sku = models.CharField(max_length=30)
    name = models.CharField(max_length=80)
    description = models.CharField(max_length=240)
    inventory_type = models.ForeignKey(
        InventoryType, on_delete=models.DO_NOTHING)
    company = models.ForeignKey(Company, on_delete=models.DO_NOTHING)
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(InventoryItem, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
