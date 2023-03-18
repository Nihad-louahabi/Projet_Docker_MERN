FROM node:latest

WORKDIR /app/src

COPY . .

COPY package.json ./



RUN npm install 
RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD ["npm", "start"]
