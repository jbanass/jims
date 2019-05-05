from django.db import models
from django.utils import timezone
from vendors.models import Vendor
from companies.models import Company

# Create your models here.


class Material(models.Model):
    vendor_sku = models.CharField(max_length=30)
    vendor = models.ForeignKey(Vendor, on_delete=models.DO_NOTHING)
    company = models.ForeignKey(Company, on_delete=models.DO_NOTHING)
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Material, self).save(*args, **kwargs)

    def __str__(self):
        return self.vendor_sku
