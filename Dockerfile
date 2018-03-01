FROM node:carbon

# Create app directory
WORKDIR /usr/src/parrot

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install\
    server/npm install\
    client/npm install\
    client/browserify app.js -o dist/bundle.js\
    docker-compose up
 
 

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY ./package.json /usr/src/parrot

ADD . /usr/src/parrot

CMD [ "npm", "start" ]