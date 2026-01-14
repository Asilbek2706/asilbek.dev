from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

class HomePage(models.Model):
    content = CKEditor5Field(config_name='default')

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    def __str__(self):
        return "Home Page"

