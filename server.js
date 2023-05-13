const grpc = require("@grpc/grpc-js");

const services = require("./proto/product_grpc_pb");
const messages = require("./proto/product_pb");

const products = [];

function createProduct(call, callback) {
  const request = call.request;
  console.log(request.getProduct(), "Request");
  const reply = new messages.ProductResponse();

  const productData = {
    id: "1",
    name: "Product 1",
    description: "Description 1",
  };

  products.push(productData);

  const product = new messages.Product();

  product.setId(productData.id);
  product.setName(productData.name);
  product.setDescription(productData.description);

  reply.setProduct(product);

  return callback(null, reply);
}

function listProduct(call, callback) {
  return callback(null, null);
}

function main() {
  const server = new grpc.Server();
  server.addService(services.ProductServiceService, {
    createProduct: createProduct,
    listProduct: listProduct,
  });
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

main();
