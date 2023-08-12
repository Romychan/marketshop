import Link from 'next/link';
import Image from 'next/image';

import { PRODUCT_PATH } from '@/constants/routes';

import { Button } from '@/components/ui/Button/Button';

import styles from './CartItem.module.scss';

interface ICartItem {
  id: number;
  name: string;
  imageSrc: string;
  brand: string;
  price: number;
  onRemove: (id: number) => void;
}

export const CartItem = ({
  id,
  name,
  imageSrc,
  brand,
  price,
  onRemove,
}: ICartItem) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href={`${PRODUCT_PATH}/${id}`} className={styles.image}>
          <Image src={imageSrc} width={112} height={112} alt={name} priority />
        </Link>

        <div className={styles.information}>
          <Link href={`${PRODUCT_PATH}/${id}`} className={styles.name}>
            {name}
          </Link>
          <p className={styles.brand}>{brand}</p>
          <Button state="transparent" onClick={() => onRemove(id)}>
            Remove
          </Button>
        </div>
      </div>

      <p className={styles.price}>{price} $</p>
    </div>
  );
};
