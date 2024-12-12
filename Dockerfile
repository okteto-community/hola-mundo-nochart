FROM node:23-slim

WORKDIR /usr/src/app

ADD package.json yarn.lock /usr/src/app/
RUN yarn install

COPY index.js .

EXPOSE 3000

CMD yarn start
