// GENERATED CODE -- DO NOT EDIT!

// package: product
// file: product.proto

import * as product_pb from "./product_pb";
import * as grpc from "grpc";

interface IProductsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<product_pb.ProductRequest, product_pb.ProductResponse>;
  list: grpc.MethodDefinition<product_pb.Empty, product_pb.ProductList>;
}

export const ProductsService: IProductsService;

export interface IProductsServer extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<product_pb.ProductRequest, product_pb.ProductResponse>;
  list: grpc.handleUnaryCall<product_pb.Empty, product_pb.ProductList>;
}

export class ProductsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: product_pb.ProductRequest, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  create(argument: product_pb.ProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  create(argument: product_pb.ProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  list(argument: product_pb.Empty, callback: grpc.requestCallback<product_pb.ProductList>): grpc.ClientUnaryCall;
  list(argument: product_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductList>): grpc.ClientUnaryCall;
  list(argument: product_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductList>): grpc.ClientUnaryCall;
}
