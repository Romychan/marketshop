import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';

import { Button } from '@/components/ui/Button/Button';

import styles from './CartCheckout.module.scss';

export const CartCheckout = () => {
  const { items } = useTypedSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>

      <div className={styles.information}>
        <span className={styles.text}>{items.length} items</span>
        <span className={styles.text}>
          {items.reduce((acc, cur) => acc + cur.price, 0)}$
        </span>
      </div>

      <div className={styles.total}>
        <span className={styles.subtitle}>Total:</span>
        <span className={styles.subtitle}>
          {items.reduce((acc, cur) => acc + cur.price, 0)}$
        </span>
      </div>

      <Button className={styles.button}>Checkout</Button>
    </div>
  );
};
