import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { cartReducer } from './cartSlice';

export const cartPersistConfig = {
  key: 'product-cart',
  storage,
  whitelist: ['items'],
};

export const cartPersistedReducer = persistReducer(
  cartPersistConfig,
  cartReducer,
);
