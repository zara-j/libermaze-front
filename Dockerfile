# build stage
FROM registry.uid.ir/uid/node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM registry.uid.ir/uid/nginx:1.21.0-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
