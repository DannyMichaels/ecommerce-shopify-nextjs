import * as Product from '../models/product.model';

export const fetchAllProducts = async (): Promise<ShopifyBuy.Product[]> => {
  const allProducts = await Product.findAll();
  return allProducts;
};

export const fetchProductWithHandle = async (
  handle: string
): Promise<ShopifyBuy.Product> => {
  const oneProduct = await Product.findByHandle(handle);
  return oneProduct;
};
