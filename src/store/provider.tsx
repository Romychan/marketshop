'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

interface IProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};
