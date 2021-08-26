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
EXPOSE 8080:8080

# Run this shell command at build time
RUN npm install

# Start the application
CMD ["npx", "knex", "migrate:latest" ]
CMD ["npx", "knex", "seed:run" ]
CMD ["npm", "knex"]
# command: sh -c "npx knex migrate:latest && npx knex seed:run && npm start"