# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
CMD npm install
COPY . .
CMD npm run build

# production stage
FROM quay.io/nginx:1.17
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=build-stage /app/dist .
EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
