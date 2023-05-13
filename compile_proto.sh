# ! /bin/bash

CURR_DIR=$(pwd)

OUT_DIR="$CURR_DIR/proto"
PROTO_DIR="$CURR_DIR/proto"

PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"


yarn grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
  --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
  --js_out=import_style="commonjs,binary":$PROTO_DIR \
  --ts_out=service=grpc-node:$OUT_DIR \
  --grpc_out=grpc_js:$OUT_DIR \
  --proto_path=$OUT_DIR \
  $OUT_DIR/*.proto