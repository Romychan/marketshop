'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { CART_PATH } from '@/constants/routes';

import { IProduct } from '@/interfaces/product';

import { useActions } from '@/hooks/useActions';

import { Button } from '@/components/ui/Button/Button';

import styles from './DetailAction.module.scss';

interface IDetailActionProps {
  product: IProduct;
}

export const DetailAction = ({ product }: IDetailActionProps) => {
  const router = useRouter();
  const { addToCart } = useActions();
  const [existInCart, setExistInCart] = useState(false);

  const handleAddToCart = () => {
    setExistInCart(true);
    addToCart(product);
  };

  return (
    <div className={styles.container}>
      {existInCart ? (
        <Button
          state="secondary"
          className={styles.button}
          onClick={() => router.push(CART_PATH)}
        >
          Go to Cart
        </Button>
      ) : (
        <Button className={styles.button} onClick={handleAddToCart}>
          Add to Cart
        </Button>
      )}
    </div>
  );
};
