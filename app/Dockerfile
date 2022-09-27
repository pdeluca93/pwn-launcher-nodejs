# Stage one
FROM node:lts-alpine as builder

# Create app directory
WORKDIR /app

# Copy files we need
COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

# Install dependencies/devDependencies and build
RUN npm install 
RUN npm run build

# Stage two
FROM node:lts-alpine

# Install dependencies to run commands
RUN apk update
RUN apk add iputils
RUN apk add nmap

# Create app directory
WORKDIR /app

# Copy files we need from the previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only dependencies, skipping devDependencies
RUN npm ci --production
ENTRYPOINT [ "node", "dist/index.js" ]