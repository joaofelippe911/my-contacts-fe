FROM node:latest

RUN npm install -g yarn --force

WORKDIR /app

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]