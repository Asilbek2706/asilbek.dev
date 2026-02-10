from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()
BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv('SECRET_DJANGO')
DEBUG = True
X_FRAME_OPTIONS = 'SAMEORIGIN'
ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'compressor',         # SASS uchun
    'main',
    'django_ckeditor_5',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# --- STATIC & MEDIA SOZLAMALARI ---
STATIC_URL = 'static/'

# 1. Siz SASS fayllarni tashlaydigan joy
STATICFILES_DIRS = [
    BASE_DIR / 'static_dev',
]

# 2. Serverga yuklaganda ishlatiladigan papka
STATIC_ROOT = BASE_DIR / 'staticfiles'

# 3. SASS ni topish va o'girish uchun finderlar
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
]

# 4. SASS sozlamalari
COMPRESS_PRECOMPILERS = (
    ('text/x-scss', 'django_libsass.SassCompiler'),
)
COMPRESS_ENABLED = True # DEBUG=True bo'lsa ham ishlatish uchun

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# --- CKEDITOR 5 SOZLAMALARI ---
CKEDITOR_5_CONFIGS = {
    "default": {
        "toolbar": [
            "heading", "|", "bold", "italic", "link", "|",
            "codeBlock", "|", "bulletedList", "numberedList", "|",
            "blockQuote", "insertTable", "|", "imageUpload", "|", "undo", "redo",
        ],
        "codeBlock": {
            "languages": [
                {"language": "python", "label": "Python"},
                {"language": "javascript", "label": "JavaScript"},
                {"language": "html", "label": "HTML"},
                {"language": "css", "label": "CSS"},
            ]
        },
    }
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'