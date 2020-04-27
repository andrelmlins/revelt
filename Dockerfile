FROM nginx:1.17.10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY  ./build /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]