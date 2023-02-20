FROM node AS build

WORKDIR /app

COPY package.json .

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
COPY vite.config.ts .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]