FROM node:12.22.9
# Install Python and other build dependencies
#RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start" ]

