# Docker

```mermaid
flowchart LR
Dockerfile -->|Build|Image -->|Execute|Container
```

```sh
# List images
docker images

# Remove images
docker rmi <image-id> <image-id>
# Remove all images
docker rmi $(docker images -q)

# List running containers
docker ps
docker ps -a # all

# Remove container
docker rm <container-id>
# Stop all containers
docker stop $(docker ps -a -q)
# Remove all containers
docker rm $(docker ps -a -q)

# https://docs.docker.com/engine/reference/commandline/builder_build/
# Build an image using Dockerfile
# --tag , -t: Name and optionally a tag in the 'name:tag' format
docker build -t simple-docker:latest .

# Run a container
docker run simple-docker:latest # you can omit `latest`

# Stop a container
docker stop <container-id> # Or first unique letters
```

# Docker Hub

https://hub.docker.com/

# Decker Login

Create access token.

<image width='500' src='images/login.png'>

```sh
docker login -u <username>
```
