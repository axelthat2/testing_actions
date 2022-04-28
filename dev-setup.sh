set -e

# Install node packages
docker run --rm -v $(pwd):/var/www -w /var/www node:16-alpine /bin/sh -c "npm i"

# Build docker
docker-compose build

# Run
docker-compose up -d