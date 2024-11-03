#!/bin/bash

# Check if the --cache flag is set
if [[ "$*" != *"--cache"* ]]; then
    # Stop and remove all containers defined in the docker-compose file
    docker compose down
fi

# Check if the --no-cache flag is set
if [[ "$*" == *"--no-cache"* ]]; then
    # Rebuild the containers without cache
    docker compose build --no-cache
else
    # Rebuild the containers using cache for faster builds
    docker compose build
fi

# Start the services in detached mode
docker compose up
