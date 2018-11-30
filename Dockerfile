FROM node:10.14.0-slim
WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
RUN npm ci
COPY . /app
CMD ["node", "index.js"]
