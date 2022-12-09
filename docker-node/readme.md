# Dockerfile reference

https://docs.docker.com/engine/reference/builder/

`RUN` is an image build step, the state of the container after a RUN command will be committed to the container image. A Dockerfile can have many RUN steps that layer on top of one another to build the image.

`CMD` is the command the container executes by default when you launch the built image. A Dockerfile will only use the final CMD defined. The CMD can be overridden when starting a container with docker run $image $other_command.

`ENTRYPOINT` is also closely related to CMD and can modify the way a container is started from an image.

# Docker CLI

https://docs.docker.com/engine/reference/run/

```sh
docker run -it -p 3000:3000 -v $PWD/storage:/storage simple-docker:latest
docker run -it -p 3000:3000 \
  -v $PWD/storage:/storage simple-docker:latest \
  -v simple-storage:/simple-storage \
  simple-docker:latest

# -i: interactive, accepting ctrl-c
# -t: tty
# -p: publish a container's port(s) to the host
# e.g. -p 3000:3000 => map port 3000 on host machine to port 3000 on container
# -v: Bind the volumn
# -v $PWD/storage:/storage: map $PWD/storage on host to /storage on container
# -v <volumn-name>:<path-on-container>: map the volumn to the path of the container.
# If the volumn doesn't exist, it will be created.

docker run -it -p 3001:3000 simple-docker:latest
# We can run multiple containers with different host ports mapped.

docker run -it -p 3000:3000 --rm simple-docker:latest
# Run a command, and delete the created container after exit. Great for one off commands

docker container start <container-id>
# Start <container-id>. You start the container that was already created.

docker exec -it <container-id> <command>
# Run a command in a running container

docker exec -it 6a4 bash
# Run `bash` in conatiner 6a4

docker volume create <volume-name>
# Create a volume

docker volume ls
# List all the volumes
```
