import { ServerCredentials, Server, UntypedHandleCall, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";

import { Product, ProductList, ProductRequest, ProductResponse, Empty } from "../proto/product_pb";
import { IProductsServer, ProductsService } from "../proto/product_grpc_pb";

const products: Product.AsObject[] = [
  { id: "1", name: "Product 1", description: "Description 1" },
  { id: "2", name: "Product 2", description: "Description 2" },
];

class ProductServer implements IProductsServer {
  [name: string]: UntypedHandleCall;

  create(
    call: ServerUnaryCall<
      ProductRequest,
      ProductResponse
    >,
    callback: sendUnaryData<ProductResponse>
  ) {
    const { product } = call.request.toObject();
    if (product) {
      const response = new ProductResponse();
      response.setProduct(call.request.getProduct());
      products.push(product);

      return callback(null, response);
    }

    return callback(new Error("Missing product"), null);
  }

  list(
    _: ServerUnaryCall<Empty, ProductList>,
    callback: sendUnaryData<ProductList>
  ) {
    const response = new ProductList();
    products.forEach((data) => {
      const product = new Product();
      product.setId(data.id)
      product.setName(data.name)
      product.setDescription(data.description)
      const pr = new ProductResponse()
      pr.setProduct(product)
      response.addProducts(pr);
    });

    return callback(null, response);
  }
}

const server = new Server();

server.addService(ProductsService as any, new ProductServer());
server.bindAsync('0.0.0.0:50052', ServerCredentials.createInsecure(), (err, port) => {
  if (err) throw err
  console.log(`listening on ${port}`)
  server.start()
})
