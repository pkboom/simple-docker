FROM node:19

# Set the working directory
WORKDIR /app

# Copy all files from the current directory to the working directory
COPY . .

RUN npm install

# VOLUME \
#   /app/public \
#   /app/src

CMD ["npm", "start"]
