FROM node:16

# Set the working directory
WORKDIR /app

# Copy all files from the current directory to the working directory
COPY . /app

CMD ["ls", "-lah"]
