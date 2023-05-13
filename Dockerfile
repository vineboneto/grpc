FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  --plugin=protoc-gen-grpc=./node_modules/.bin/protoc-gen-ts \
  --js_out=import_style="commonjs,binary":./proto \
  --ts_out=service=grpc-node:./proto \
  --grpc_out=grpc_js:./proto \
  --proto_path=./proto \
  ./proto/*.proto && sed -i "s/require('grpc')/require('@grpc\/grpc-js')/g" ./proto/product_grpc_pb.js
  


EXPOSE 50051
