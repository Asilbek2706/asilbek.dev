from django.shortcuts import render, redirect
from .models import Page, Project, ContactConfig, ReceivedMessage
from .utils import bot_send_message

def home(request):
    """
    Bosh sahifa: CKEditor matni va 2 ta tanlangan (featured) loyihani chiqaradi.
    """
    page_data = Page.objects.filter(slug='home').first()
    featured_projects = Project.objects.filter(is_featured=True)[:2]
    conf = ContactConfig.objects.first()

    context = {
        'page': page_data,
        'projects': featured_projects,
        'contact_settings': conf,
    }
    return render(request, 'pages/home.html', context)

def about(request):
    """
    Men haqimda sahifasi: Faqat CKEditor matni.
    """
    page_data = Page.objects.filter(slug='about').first()
    conf = ContactConfig.objects.first()

    context = {
        'page': page_data,
        'contact_settings': conf,
    }
    return render(request, 'pages/about.html', context)

def portfolio(request):
    """
    Portfolio sahifasi: Barcha loyihalar ro'yxati.
    """
    all_projects = Project.objects.all()
    conf = ContactConfig.objects.first()

    context = {
        'projects': all_projects,
        'contact_settings': conf,
    }
    return render(request, 'pages/portfolio.html', context)

def contact(request):
    page = Page.objects.filter(slug='contact').first()
    contact_settings = ContactConfig.objects.first()

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject', 'Mavzu ko\'rsatilmagan')
        message = request.POST.get('message')

        ReceivedMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        try:
            bot_send_message(name, email, message)
        except Exception as e:
            print(f"Telegramga yuborishda xatolik: {e}")

        return render(request, 'pages/contact.html', {
            'page': page,
            'contact_settings': contact_settings,
            'success': True
        })

    return render(request, 'pages/contact.html', {
        'page': page,
        'contact_settings': contact_settings
    })
def message_history(request):
    user_messages = None
    search_email = request.GET.get('email')

    if search_email:
        user_messages = ReceivedMessage.objects.filter(email=search_email).order_by('-created_at')

    conf = ContactConfig.objects.first()
    return render(request, 'pages/message_history.html', {
        'messages': user_messages,
        'email': search_email,
        'contact_settings': conf
    })