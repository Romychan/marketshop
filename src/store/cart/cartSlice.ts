import { IProduct } from '@/interfaces/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] as IProduct[],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExistCart = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!isExistCart) {
        state.items.push(action.payload);
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
