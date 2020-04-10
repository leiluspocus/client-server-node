FROM node:9.4.0-alpine

# Add build tools necessary for npm installations.
RUN apk add --no-cache make gcc g++ python

# Install global Dependencies
ADD . /app

WORKDIR /app

RUN npm install

CMD npm run start