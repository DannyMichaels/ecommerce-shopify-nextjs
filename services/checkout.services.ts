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

export const addLineItems = async (
  checkoutId: string | number,
  lineItemsToAdd: ShopifyBuy.LineItemToAdd[]
) => {
  const checkout = await client.checkout.addLineItems(
    checkoutId,
    lineItemsToAdd
  );
  return checkout;
};

export const removeLineItems = async (
  checkoutId: string | number,
  lineItemIdsToRemove: Array<string>
): Promise<ShopifyBuy.Cart> => {
  const checkout = await client.checkout.removeLineItems(
    checkoutId,
    lineItemIdsToRemove
  );
  return checkout;
};
