FROM node:10-alpine as BUILD

WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

FROM nginx:1.16-alpine

COPY --from=BUILD /app/dist /usr/share/nginx/html

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]