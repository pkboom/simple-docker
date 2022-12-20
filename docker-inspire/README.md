https://github.com/ijpatricio/inspire

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
