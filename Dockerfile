FROM node:20

ARG BUILD_TARGET
ENV BUILD_TARGET=${BUILD_TARGET}

RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY . /usr/src

RUN apt-get update && apt-get -y upgrade
RUN apt-get install git

# Install dependencies
RUN yarn install

CMD ["yarn", "run", "dev"]
