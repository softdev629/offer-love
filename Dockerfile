FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev
# Install cross-env globally in this stage
RUN npm install -g cross-env npm i @react-router/serve

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
# Install cross-env and npm i @react-router/serve in the final stage
RUN npm install -g cross-env npm i @react-router/serve
EXPOSE 3000
CMD ["cross-env", "NODE_ENV=production", "react-router-serve", "./build/server/index.js"]