#!/bin/bash

mv docker-compose-dev.yml docker-compose.yml
docker-compose -f docker-compose.yml up -d --build
