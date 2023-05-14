import { ChannelCredentials } from '@grpc/grpc-js'
import { ProductsClient } from '../proto/product_grpc_pb'
import { Empty, Product, ProductList, ProductRequest, ProductResponse } from '../proto/product_pb'
import { promisify } from 'util'


function makeProduct() {
  const product = new Product()
  product.setId('3')
  product.setName('Product 3')
  product.setDescription('Description 3')
  return product
}

function makeRequest() {
  const request = new ProductRequest()
  request.setProduct(makeProduct())
  return request
}

async function main() {
  const client = new ProductsClient('0.0.0.0:50052', ChannelCredentials.createInsecure())
  
  const createAsync = promisify<ProductRequest, ProductResponse>(client.create).bind(client);
  const listAsync = promisify<Empty, ProductList>(client.list).bind(client);
  
  try {
    const response1 = await createAsync(makeRequest())
    console.log(response1.getProduct()?.toObject())
    
    const response2 = await listAsync(new Empty())
    console.log(response2.getProductsList().map((p) => p.toObject()))
  } catch(err) {
    console.log(err)
  }
}

main()

