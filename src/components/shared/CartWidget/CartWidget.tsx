'use client';

import Link from 'next/link';

import { CART_PATH } from '@/constants/routes';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useIsClient } from '@/hooks/useIsClient';

import { Icon } from '../../ui/Icon/Icon';

import styles from './CartWidget.module.scss';

export const CartWidget = () => {
  const { items } = useTypedSelector((state) => state.cart);
  const isClient = useIsClient();

  return (
    <Link href={CART_PATH} className={styles.container}>
      <div className={styles.content}>
        {isClient && items.length ? (
          <span className={styles.counter}>{items.length}</span>
        ) : null}
        <Icon name="cart" size={24} className={styles.icon} />
      </div>
    </Link>
  );
};
