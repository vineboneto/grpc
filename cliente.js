const grpc = require("@grpc/grpc-js");
const { promisify } = require("util");

const services = require("./proto/product_grpc_pb");
const messages = require("./proto/product_pb");

async function main() {
  const client = new services.ProductServiceClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  const request = new messages.ProductRequest();

  const product = new messages.Product();
  product.setId("1");
  product.setName("Product 1");
  product.setDescription("Description 1");
  request.setProduct(product);
  try {
    const asyncCreateProduct = promisify(client.createProduct).bind(client);
    const response = await asyncCreateProduct(request);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

main();
