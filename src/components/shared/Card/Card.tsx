import Image from 'next/image';
import Link from 'next/link';

import { PRODUCT_PATH } from '@/constants/routes';

import styles from './Card.module.scss';

interface ICardProps {
  id: number;
  name: string;
  imageSrc: string;
  brand: string;
  price: number;
}

export const Card = ({ id, name, imageSrc, brand, price }: ICardProps) => {
  return (
    <div className={styles.container}>
      <Link href={`${PRODUCT_PATH}/${id}`} className={styles.image}>
        <Image src={imageSrc} width={450} height={500} alt={name} priority />
      </Link>

      <div className={styles.information}>
        <Link href={`${PRODUCT_PATH}/${id}`} className={styles.name}>
          {name}
        </Link>
        <p className={styles.brand}>{brand}</p>
      </div>
      <p className={styles.price}>{price} $</p>
    </div>
  );
};
