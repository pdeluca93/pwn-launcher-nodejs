FROM node:lts-alpine


# update packages
RUN apk update
RUN apk add iputils

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./

# copy source code to /app/src folder
COPY src /app/src

RUN npm install
RUN npm run build

CMD [ "node", "./src/index.js" ]