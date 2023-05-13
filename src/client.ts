import { ChannelCredentials } from '@grpc/grpc-js'
import { ProductsClient } from '../proto/product_grpc_pb'
import { Empty, Product, ProductList, ProductRequest, ProductResponse } from '../proto/product_pb'

const client = new ProductsClient('0.0.0.0:50052', ChannelCredentials.createInsecure())

const product = new Product()
product.setId('3')
product.setName('Product 3')
product.setDescription('Description 3')
const request = new ProductRequest()
request.setProduct(product)

client.create(request, (err: any, response: ProductResponse) => {
  if (err) console.log(err)

  console.log(response.getProduct()?.toObject())
})

client.list(new Empty(), (err: any, response: ProductList) => {
  if (err) console.log(err)

  console.log(response.getProductsList().map((p) => p.toObject()))
})
