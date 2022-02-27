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

    addItemToCheckout: async () => {},

    removeLineItem: async (lineItemIdsToRemove: Array<number>) => {
      set({});
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
