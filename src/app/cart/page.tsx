import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

import { Section } from '@/components/ui/Section/Section';

const CartDynamic = dynamic(() => import('@/components/Cart/Cart'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'MarketShop - Cart',
  description: 'MarketShop Cart',
};

const CartPage = () => {
  return (
    <Section title="Cart">
      <CartDynamic />
    </Section>
  );
};

export default CartPage;
