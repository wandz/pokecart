FROM buildkite/puppeteer

WORKDIR /usr/src/app

RUN apt-get update && apt-get -y install procps

COPY package*.json ./
RUN npm install

COPY . .
