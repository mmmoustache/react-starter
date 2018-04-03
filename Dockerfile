FROM node:8.8-alpine

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --production --no-progress

COPY ./build .

CMD [ "node", "server.js" ]