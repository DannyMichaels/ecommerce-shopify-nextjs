import { client } from '../shopify';

export const createCheckout = async (): Promise<ShopifyBuy.Cart> => {
  const createdCheckout = await client.checkout.create();
  localStorage.setItem('checkout_id', String(createdCheckout.id));
  return createdCheckout;
};

export const fetchCheckout = async (
  checkoutId: string
): Promise<ShopifyBuy.Cart> => {
  const oneCheckout = await client.checkout.fetch(checkoutId);
  return oneCheckout;
};

export const addItemToCheckout = async () => {};
