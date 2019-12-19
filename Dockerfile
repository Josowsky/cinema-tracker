# Pull node 10 image
FROM node:10

# Set the working dir to /app (on the container)
WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

# Copy server workspaces the container
COPY server/ server/
COPY client/ client/

# Install dependencies
RUN yarn install --frozen-lockfile

# Build react app
RUN yarn workspace client build

# Expose port 5000 to mount it to port on the host
EXPOSE 5000

WORKDIR /app/server

# Run express app
CMD ["node", "../node_modules/@babel/node/bin/babel-node.js", "app.js"]