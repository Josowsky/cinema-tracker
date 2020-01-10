# Pull lightweight node 11 image
FROM node:11-alpine

# Set env variables
ARG POSTGRES_DB
ENV DATABASE=$POSTGRES_DB
ARG POSTGRES_USER
ENV DATABASE_USER=$POSTGRES_USER
ARG POSTGRES_PASSWORD
ENV DATABASE_PASSWORD=$POSTGRES_PASSWORD
ENV NODE_ENV=production

# Set the working dir to /usr/src/app (on the container)
WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY server/package.json server/package.json
COPY client/package.json client/package.json

# Install dependencies on the container
RUN yarn install --frozen-lockfile --production

# Copy application code to the container
COPY server/ server/
COPY client/ client/

# Prepare script for waiting for the db
COPY wait-for-it.sh wait-for-it.sh
RUN chmod +x wait-for-it.sh

# Install postgresql-client on the container (required by wait-for-it.sh)
RUN apk --update add postgresql-client

# Assign proper permisions for the run script on the container
RUN chmod +x server/run.sh

# Build react app
RUN yarn workspace client build

# Copy client app to server directory
RUN cp -r client/build server/build

# Expose container port 5000 to mount it to port on the host
EXPOSE 5000

# Install bash (Alpine doesn't have it by default)
RUN apk add --no-cache bash

WORKDIR /usr/src/app/server

# Run express app
CMD ./run.sh