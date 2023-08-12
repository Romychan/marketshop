'use client';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

import { CartItem } from './CartItem/CartItem';
import { CartCheckout } from './CartCheckout/CartCheckout';

import styles from './Cart.module.scss';

const Cart = () => {
  const { items } = useTypedSelector((state) => state.cart);
  const { deleteFromCart } = useActions();

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {items.length !== 0 ? (
          items.map((element) => (
            <CartItem
              key={element.id}
              id={element.id}
              name={element.name}
              imageSrc={element.src}
              brand={element.brand}
              price={element.price}
              onRemove={deleteFromCart}
            />
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <CartCheckout />
    </div>
  );
};

export default Cart;
