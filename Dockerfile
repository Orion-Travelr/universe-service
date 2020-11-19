FROM node:14 as builder
WORKDIR /var/www
COPY . .
RUN npm ci
RUN npm run build

FROM node:14 as serve
WORKDIR /var/www
RUN chown node:node .
USER node
COPY package*.json ./
RUN npm install
COPY --from=builder /var/www/dist/ dist/
COPY --from=builder /var/www/database/ database/
COPY --from=builder /var/www/.env .
EXPOSE 3001
CMD npm run serve
