# ! /bin/bash
CURR_DIR=$(pwd)
OUT_DIR="$CURR_DIR/proto"
PROTO_DIR="$CURR_DIR/proto"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
yarn grpc_tools_node_protoc \
  --plugin=protoc-gen-grpc=$PROTOC_GEN_GRPC_PATH \
  --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc_out=grpc_js:$OUT_DIR \
  --ts_out=grpc_js:$OUT_DIR \
  --proto_path=$PROTO_DIR \
  $PROTO_DIR/*.proto

# generate d.ts codes
protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:$OUT_DIR \
    --proto_path=$PROTO_DIR \
    $OUT_DIR/*.proto