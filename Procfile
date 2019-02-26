release: python manage.py collectstatic --noinput
web: gunicorn --preload --max-requests 1200 -b :$PORT --env DJANGO_SETTINGS_MODULE=innoscripta_test.settings innoscripta_test.wsgi 
