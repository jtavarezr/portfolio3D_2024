# Etapa de construcción
FROM node:current AS build-stage

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
