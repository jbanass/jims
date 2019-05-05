from django.db import models
from django.utils import timezone

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal = models.CharField(max_length=20)
    image = models.BinaryField()
    site = models.URLField()
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Company, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
