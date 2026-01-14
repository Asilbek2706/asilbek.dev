# main/admin.py
from django.contrib import admin
from django import forms
from django_ckeditor_5.widgets import CKEditor5Widget
from .models import HomePage


class HomePageAdminForm(forms.ModelForm):
    class Meta:
        model = HomePage
        fields = "__all__"
        widgets = {
            "content": CKEditor5Widget(config_name="default"),
        }


@admin.register(HomePage)
class HomePageAdmin(admin.ModelAdmin):
    form = HomePageAdminForm
