import { client } from '../shopify';

export const fetchAllProducts = async (): Promise<ShopifyBuy.Product[]> => {
  const fetchedProducts = await client.product.fetchAll();
  return fetchedProducts;
};

export const fetchProductWithHandle = async (
  handle: string
): Promise<ShopifyBuy.Product> => {
  const oneProduct = await client.product.fetchByHandle(handle);
  return oneProduct;
};
