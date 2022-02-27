import { client } from '../shopify';
import * as Product from '../models/product.model';

// export const fetchAllProducts = async (): Promise<ShopifyBuy.Product[]> => {
//   const fetchedProducts = await client.product.fetchAll();
//   return fetchedProducts;
// };

export const fetchAllProducts = async (): Promise<ShopifyBuy.Product[]> => {
  const allProducts = await Product.findAll();
  return allProducts;
};

// export const fetchProductWithHandle = async (
//   handle: string
// ): Promise<ShopifyBuy.Product> => {
//   const oneProduct = await client.product.fetchByHandle(handle);
//   return oneProduct;
// };

export const fetchProductWithHandle = async (
  handle: string
): Promise<ShopifyBuy.Product> => {
  const oneProduct = await Product.findById(handle);
  return oneProduct;
};

export const fetchProductById = async (
  productId: string
): Promise<ShopifyBuy.Product> => {
  const oneProduct = await client.product.fetch(productId);
  return oneProduct;
};
