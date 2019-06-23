from django.db import models
from django.utils import timezone
from companies.models import Company

# Create your models here.


class Vendor(models.Model):
    name = models.CharField(max_length=100)
    company = models.ForeignKey(
        to=Company, on_delete=models.DO_NOTHING)
    url = models.URLField()
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Vendor, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
