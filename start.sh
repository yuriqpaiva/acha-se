#!/bin/bash

# Stop and remove all containers defined in the docker-compose file
docker compose down

# Rebuild the containers using cache for faster builds
docker compose build

# Start the services in detached mode
docker compose up
