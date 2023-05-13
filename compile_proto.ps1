$Path = $pwd.Path

$OutputPath = "$Path\proto"
$ProtoPath = "$Path\proto"

# JS
yarn grpc_tools_node_protoc `
  --js_out=import_style="commonjs,binary":$ProtoPath `
  --grpc_out=$OutputPath `
  --proto_path=$OutputPath `
  "$OutputPath\*.proto"

yarn grpc_tools_node_protoc `
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts `
  --ts_out=grpc_js:$OutputPath `
  --proto_path=$OutputPath `
  product.proto