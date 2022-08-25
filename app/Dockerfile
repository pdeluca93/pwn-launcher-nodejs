FROM kalilinux/kali-rolling:latest

# update packages
RUN apt-get update
RUN apt-get -y install iputils-ping dnsutils nmap curl 
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs

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