FROM node:18.20-alpine3.19 as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN yarn install

RUN yarn
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
