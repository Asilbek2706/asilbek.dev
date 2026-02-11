# asilbek.dev

![Django CI](https://github.com/Asilbek2706/asilbek.dev/actions/workflows/ci_cd.yml/badge.svg)
![Image Compress](https://github.com/Asilbek2706/asilbek.dev/actions/workflows/image_compress.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A personal portfolio website built with Django, featuring a content management system for pages, projects, and contact messages.

## Features

- 📄 Dynamic page management with CKEditor integration
- 💼 Portfolio/Projects showcase
- 📧 Contact form with Telegram bot integration
- 📱 Message history tracking
- 🖼️ Image upload and management
- 🎨 Clean and responsive design

## Tech Stack

- **Backend**: Django 6.0.1
- **Database**: SQLite (default)
- **Editor**: CKEditor 5 for rich text editing
- **Other**: Python-dotenv for environment variables

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Asilbek2706/asilbek.dev.git
cd asilbek.dev
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file for environment variables (optional):
```bash
# Add your environment variables here
SECRET_KEY=your-secret-key
DEBUG=True
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Create a superuser:
```bash
python manage.py createsuperuser
```

7. Run the development server:
```bash
python manage.py runserver
```

8. Access the site at `http://127.0.0.1:8000/`

## Usage

### Admin Panel
Access the Django admin panel at `http://127.0.0.1:8000/admin/` to:
- Manage pages (Home, About, Contact)
- Add/edit projects
- Configure contact settings (email, Telegram bot)
- View received messages

### Pages
- **Home**: Displays featured projects and content
- **About**: Personal information and bio
- **Portfolio**: Complete list of projects
- **Contact**: Contact form with Telegram integration
- **Message History**: View contact message history

## Configuration

Configure the following in the Django admin:
- **Contact Settings**: Email, Telegram username, bot token, and admin ID
- **Pages**: Edit content for Home, About, and Contact pages
- **Projects**: Add your projects with images, descriptions, and links

## License

This project is licensed under the MIT License.
