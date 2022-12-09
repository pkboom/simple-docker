# Docker Compose

https://docs.docker.com/compose

```sh
docker compose config
# Show config

docker compose build
# Build or rebuild services

docker compose up
# Create and start containers

docker compose down
# Stop and remove containers, networks

docker compose start/stop
# Start/stop services

docker compose logs --follow
# View output from containers
# --follow: follow log output

docker inspect <container-id>
# Inspect container

docker compose exec <service-name> <command>

# e.g.
docker compose exec web bash
```
