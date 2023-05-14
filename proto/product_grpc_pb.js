// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_Empty(arg) {
  if (!(arg instanceof product_pb.Empty)) {
    throw new Error('Expected argument of type product.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Empty(buffer_arg) {
  return product_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductList(arg) {
  if (!(arg instanceof product_pb.ProductList)) {
    throw new Error('Expected argument of type product.ProductList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductList(buffer_arg) {
  return product_pb.ProductList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductRequest(arg) {
  if (!(arg instanceof product_pb.ProductRequest)) {
    throw new Error('Expected argument of type product.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductRequest(buffer_arg) {
  return product_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductResponse(arg) {
  if (!(arg instanceof product_pb.ProductResponse)) {
    throw new Error('Expected argument of type product.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductResponse(buffer_arg) {
  return product_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductsService = exports.ProductsService = {
  create: {
    path: '/product.Products/Create',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ProductRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_ProductRequest,
    requestDeserialize: deserialize_product_ProductRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  list: {
    path: '/product.Products/List',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Empty,
    responseType: product_pb.ProductList,
    requestSerialize: serialize_product_Empty,
    requestDeserialize: deserialize_product_Empty,
    responseSerialize: serialize_product_ProductList,
    responseDeserialize: deserialize_product_ProductList,
  },
};

exports.ProductsClient = grpc.makeGenericClientConstructor(ProductsService);
