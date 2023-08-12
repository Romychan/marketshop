import Image from 'next/image';
import clsx from 'clsx';

import { getOneProduct } from '@/lib/product';

import { DetailAction } from './DetailAction/DetailAction';

import styles from './Detail.module.scss';

interface IDetailProps {
  id: string;
  quickView?: boolean;
}

export const Detail = async ({ id, quickView = false }: IDetailProps) => {
  const product = await getOneProduct(id);

  return (
    <div
      className={clsx(styles.container, {
        [styles.quickview]: quickView,
      })}
    >
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={product.src}
            alt={product.name}
            width={290}
            height={390}
            quality={90}
          />
        </div>

        <div className={styles.information}>
          <div className={styles.detail}>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.price}>{product.price} $</p>
          </div>

          <DetailAction product={product} />

          <div className={styles.description}>
            <h2 className={styles.subtitle}>Description</h2>
            <p className={styles.text}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
