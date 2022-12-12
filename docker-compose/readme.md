# Docker Compose

https://docs.docker.com/compose

```sh
docker compose config
# Show config

docker compose -f docker-compose.yml -f docker-compose.override.yml config
# Show config after merging `docker-compose.yml` and `docker-compose.override.yml`.
# Latter one has priority, overriding.
# If values are a list, they are merged, not overriding. E.g. ports.
# You don't need to specify `docker-compose.override.yml`.
# Docker automatically tries to find it and merge.
# If -f is specified, only the specified file is checked out, ignoring `docker-compose.override.yml`.

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
docker compose exec web bash # run `bash`
```
