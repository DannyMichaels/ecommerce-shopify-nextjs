import { combine } from 'zustand/middleware';
import { InitialState } from './store';
import * as CheckoutService from './services/checkout.services';
import * as ProductsService from './services/products.services';

export const reducer = (initialState: InitialState, preloadedState = {}) => {
  return combine({ ...initialState, ...preloadedState }, (set, get) => ({
    createCheckout: async () => {
      const createdCheckout = await CheckoutService.createCheckout();
      set({
        checkout: createdCheckout,
      });
    },

    fetchCheckout: async (checkoutId: string) => {
      const oneCheckout = await CheckoutService.fetchCheckout(checkoutId);
      set({
        checkout: oneCheckout,
      });
    },

    addItemToCheckout: async (variantId: string | number, quantity: number) => {
      const lineItemsToAdd = [
        {
          variantId,
          quantity,
        },
      ];

      const checkout = await CheckoutService.addLineItems(
        get().checkout.id,
        lineItemsToAdd
      );

      set({
        checkout,
      });
    },

    removeLineItems: async (lineItemIdsToRemove: Array<string>) => {
      const checkout = await CheckoutService.removeLineItems(
        get().checkout.id,
        lineItemIdsToRemove
      );

      set({
        checkout,
      });
    },

    fetchAllProducts: async () => {
      const fetchedProducts = await ProductsService.fetchAllProducts();

      set({
        products: fetchedProducts,
      });
    },

    // fetch one product by "handle" aka id
    fetchProductWithHandle: async (handle: string) => {
      const oneProduct = await ProductsService.fetchProductWithHandle(handle);
      set({
        product: oneProduct,
      });
    },

    setIsMenuOpen: (value: boolean) => {
      console.log('setting menu', value);
      set({
        isMenuOpen: value,
      });
    },

    setIsCartOpen: (value: boolean) => {
      set({
        isCartOpen: value,
      });
    },
  }));
};
