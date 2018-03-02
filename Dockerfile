FROM node:carbon

RUN mkdir  /root/project/

ADD . /root/project/

WORKDIR /root/project/

RUN npm install && \
      cd client && npm install && \
      cd ../server && npm install

ENTRYPOINT ["/root/project/entrypoint.sh"]
root@debian-s-2vcpu-4gb-fra1-01:~/app/parrot#