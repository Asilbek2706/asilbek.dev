from django.contrib import admin
from django import forms
from django_ckeditor_5.widgets import CKEditor5Widget
from .models import Page, Project, ContactConfig, ReceivedMessage

class PageAdminForm(forms.ModelForm):
    class Meta:
        model = Page
        fields = "__all__"
        widgets = {
            "content": CKEditor5Widget(config_name="default"),
        }

@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    form = PageAdminForm
    list_display = ('slug', 'title')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_featured', 'created_at')
    list_editable = ('is_featured',)
    list_filter = ('is_featured', 'created_at')

@admin.register(ContactConfig)
class ContactConfigAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return not ContactConfig.objects.exists()

from .models import ReceivedMessage
@admin.register(ReceivedMessage)
class ReceivedMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    readonly_fields = ('name', 'email', 'message', 'created_at')