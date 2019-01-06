#!/bin/bash

mv docker-compose-prod.yml docker-compose.yml
docker-compose -f docker-compose.yml up -d --build
