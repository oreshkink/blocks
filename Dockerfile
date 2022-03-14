FROM node:16.14-alpine as development-stage

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

FROM development-stage as build-stage
RUN npm run build

FROM nginx:stable-alpine as production-stage

EXPOSE 8001

COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build-stage /app/dist/blocks /var/www/blocks/public

CMD ["nginx", "-g", "daemon off;"]
