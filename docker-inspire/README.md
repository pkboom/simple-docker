# Hosting Docker App

1. Create a server on digital ocean.
1. `ssh` into the server.
1. Install `docker` unless installed.
   - https://docs.docker.com/engine/install/ubuntu/
1. Run commands

```sh
# Create a user
adduser --gecos "" forge
# --gecos: Set  the  gecos field for the new entry generated.  adduser will not ask for finger information if this option is given.
# --gecos "": Set the gecos field to ''
# https://en.wikipedia.org/wiki/Gecos_field

# add groups to forge
usermod -aG sudo,docker forge

# switch to forge
su forge

echo 'alias dc="docker compose"' >> ~/.bash_aliases

. ~/.bashrc

mkdir apps

cd apps

git clone <repository>

# set up .env
# set `VITE_PUSHER_HOST` to server ip

docker compose -f docker-compose.demo.yml build
docker compose -f docker-compose.demo.yml up -d

# Open new SSH session, and go with Forge user, to app folder
docker compose -f docker-compose.demo.yml exec -u forge inspire bash
php artisan key:generate
php artisan migrate
```

1. `su forge`
1.

# SSH into server

```sh
ssh -o "UserKnownHostsFile=/dev/null" root@123.123.123.123
# -o: options
# UserKnownHostsFile parameter specifies the database file to use for storing the user host keys (default is ~/.ssh/known_hosts)
# UserKnownHostsFile=/dev/null: store user host keys in /dev/null, meaning discard it.
```

Disable SSH host key checking for all hosts

```
# ~/.ssh/config

Host *
   StrictHostKeyChecking no
   UserKnownHostsFile=/dev/null
```

https://github.com/ijpatricio/inspire
