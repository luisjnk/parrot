FROM node:carbon

# Create app directory
WORKDIR /root/app/parrot

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install 
RUN npm buildClient
RUN npm buildServer
RUN npm browserifyClient
RUN docker-compose up

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY ./package.json /root/app/parrot

ADD . /root/app/parrot

CMD [ "npm", "start" ]
