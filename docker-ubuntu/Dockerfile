# Pull: ubuntu:22.04
FROM ubuntu:22.04

RUN mkdir /myvol

# create a file 'greeting' in the volume
RUN echo "hello world" >/myvol/greeting

# create a volume
VOLUME /myvol

# Run this command
CMD ["echo", "Hello World'"]
