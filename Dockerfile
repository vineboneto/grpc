FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN apt update && apt upgrade -y
RUN apt install -y protobuf-compiler

RUN yarn


COPY . ./

EXPOSE 50051

