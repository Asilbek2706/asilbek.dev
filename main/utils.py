import requests
import os
from django.conf import settings

def bot_send_message(name, email, message):
    """
    Telegram bot orqali xabar yuborish funksiyasi.
    Views.py dagi importga moslash uchun nomi 'bot_send_message' ga o'zgartirildi.
    """
    token = os.getenv('BOT_TOKEN')
    admin_id = os.getenv('ADMIN_CHAT_ID')

    if not token or not admin_id:
        print("Xatolik: .env faylida BOT_TOKEN yoki ADMIN_CHAT_ID topilmadi!")
        return

    text = (
        f"🚀 <b>Yangi xabar keldi!</b>\n"
        f"--------------------------\n"
        f"👤 <b>Kimdan:</b> {name}\n"
        f"📧 <b>Email:</b> {email}\n"
        f"💬 <b>Xabar:</b>\n<i>{message}</i>"
    )

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": admin_id,
        "text": text,
        "parse_mode": "HTML"
    }

    try:
        response = requests.post(url, data=payload)
        if response.status_code != 200:
            print(f"Telegram API xatosi: {response.text}")
    except Exception as e:
        print(f"Tarmoq ulanishida xatolik: {e}")