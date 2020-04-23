FROM node:14.0.0-stretch AS builder

WORKDIR /usr/src/app

COPY . /usr/src/app

FROM nginx:1.17.10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/build /app

EXPOSE 80

CMD ["nginx", "-g", "'daemon off;'"]