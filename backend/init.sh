#!/bin/bash

#npm install

python manage.py makemigrations
python manage.py migrate
python manage.py loaddata coin.json

if [ ${PRODUCTION} == "false" ]; then
    # use development server
    echo "running dev server"
	python manage.py runserver 0.0.0.0:8000
else
    # use production server
    echo "running prod server"
    rm -rf /code/frontend/static/frontend/*
    rm -rf /static/*
    npm install
    npm run build
    python manage.py collectstatic
	gunicorn core.wsgi -w 4 -b 0.0.0.0:8000
fi

