# build stage
FROM registry.uid.ir/uid/node:22.9.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
RUN ls -lah 

# production stage
FROM registry.uid.ir/uid/nginx:1.21.0-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
