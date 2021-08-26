# Specify the node base image with your desired version, e.g. node:<version>
FROM node:14

RUN mkdir -p /src/app

# Set and create the working directory for this app
WORKDIR /app/src

# Copy this application's files from the current directory to the filesystem
# of the container at /app
COPY . /app/src

# Make the container accept traffic on port 3000 at runtime from other
# containers or the host if also published
EXPOSE 3000:3000

# Run this shell command at build time
RUN npm install

# Start the application
CMD [ "npm", "start" ]