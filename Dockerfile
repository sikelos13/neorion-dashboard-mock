FROM node:11.8.0-alpine AS dev
LABEL maintainer="Ioannis Dritsas <dritsas@intelligems.eu>"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Use cli tools from anywhere
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install

COPY . /usr/src/app

CMD ["npm", "start"]


FROM node:11.8.0-alpine AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Use cli tools from anywhere
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Declare ARG & ENV section here

COPY --from=dev /usr/src/app /usr/src/app

RUN npm run build


FROM nginx:alpine AS production

COPY --from=builder /usr/src/app/public /usr/share/nginx/html/

# Copy default.conf to nginx includes
COPY default.conf /etc/nginx/conf.d/default.conf
