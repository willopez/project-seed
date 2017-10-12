FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose bound port
EXPOSE 4000

CMD [ "npm", "start" ]
