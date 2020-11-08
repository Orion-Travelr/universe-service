FROM node:14

RUN apt update \
    && apt install -y apt-transport-https ca-certificates sqlite3 \
    && npm config set user root \
    && npm install -g sqlite3 \
    && npm install -g sequelize-cli

RUN mkdir -p /var/www

ADD package.json /var/www

WORKDIR /var/www

RUN npm install

ADD . /var/www

EXPOSE 3001

CMD npm run serve:debug
