
FROM node:carbon

RUN mkdir  /root/project/

ADD . /root/project/

WORKDIR /root/project/

RUN npm install && \
      cd client && npm install && \
      cd ../server && npm install

ENTRYPOINT ["entrypoint.sh"]
