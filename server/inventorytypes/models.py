from django.db import models
from django.utils import timezone
from companies.models import Company

# Create your models here.


class InventoryType(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=240)
    color = models.CharField(max_length=6)
    company = models.ForeignKey(Company, on_delete=models.DO_NOTHING)
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(InventoryType, self).save(*args, **kwargs)
