import { combine } from 'zustand/middleware';

export const reducer = (initialState: any, preloadedState = {}) => {
  return combine({ ...initialState, ...preloadedState }, (set, get) => ({
    reset2: () => {
      set({ count: 100 });
    },
    tick: (lastUpdate: number, light: boolean) => {
      set({
        lastUpdate,
        light: !!light,
      });
    },
    increment: () => {
      set({
        count: get().count + 1,
      });
    },
    decrement: () => {
      set({
        count: get().count - 1,
      });
    },
    reset: () => {
      set({
        count: initialState.count,
      });
    },
  }));
};
