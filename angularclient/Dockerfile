FROM node:18.18.2
RUN mkdir /usr/src/app
WORKDIR  usr/src/app


ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app/

EXPOSE 4200

CMD ng serve --port 4200
