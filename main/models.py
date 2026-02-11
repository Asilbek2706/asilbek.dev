from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

class Page(models.Model):
    PAGE_CHOICES = [
        ('home', 'Bosh sahifa'),
        ('about', 'Men haqimda'),
        ('contact', 'Kontakt sahifasi matni'),
    ]
    slug = models.CharField(max_length=20, choices=PAGE_CHOICES, unique=True)
    title = models.CharField(max_length=200, help_text="Sahifa sarlavhasi")
    image = models.ImageField(upload_to='pages/', blank=True, null=True, help_text="Sahifada ko'rinadigan rasm")
    content = CKEditor5Field(config_name='default')

    def __str__(self):
        return self.get_slug_display()

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    demo_link = models.URLField(blank=True, null=True, help_text="Loyiha jonli havolasi")
    github_link = models.URLField(blank=True, null=True, help_text="GitHub repozitoriy havolasi")
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

class ContactConfig(models.Model):
    email = models.EmailField()
    telegram = models.CharField(max_length=100, help_text="Faqat username yozing (masalan: asilbek_dev)")
    address = models.CharField(max_length=255)
    bot_token = models.CharField(max_length=255)
    admin_id = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    def __str__(self):
        return "Sayt umumiy sozlamalari"

class ReceivedMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField()
    reply = models.TextField(blank=True, null=True, verbose_name="Mening javobim")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} dan xabar"