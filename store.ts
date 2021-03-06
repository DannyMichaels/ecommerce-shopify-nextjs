import { useLayoutEffect } from 'react';
import create, { UseBoundStore } from 'zustand';
import createContext from 'zustand/context';
import { devtools } from 'zustand/middleware';
import { reducer } from './reducer';

let store: any;

export type InitialState = typeof initialState;
type UseStoreState = typeof initializeStore extends (
  ...args: never
) => UseBoundStore<infer T>
  ? T
  : never;

const initialState = {
  product: {} as ShopifyBuy.Product,
  products: [] as ShopifyBuy.Product[],
  checkout: {} as ShopifyBuy.Cart,
  isCartOpen: false,
  isMenuOpen: false,
};

const zustandContext = createContext<UseStoreState>();
export const Provider = zustandContext.Provider;
export const useStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  return create(devtools(reducer(initialState, preloadedState)));
};

export const useCreateStore = (initialState: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (initialState && store) {
      store.setState({
        ...store.getState(),
        ...initialState,
      });
    }
  }, [initialState]);

  return () => store;
};
