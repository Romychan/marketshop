import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cartAction } from '@/store/cart/cartSlice';

const rootActions = { ...cartAction };

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
