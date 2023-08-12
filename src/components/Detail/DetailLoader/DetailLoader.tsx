import clsx from 'clsx';

import { Skeleton } from '@/components/ui/Skeleton/Skeleton';

import styles from './DetailLoader.module.scss';

interface IDetailProps {
  quickView?: boolean;
}

export const DetailLoader = ({ quickView }: IDetailProps) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.quickview]: quickView,
      })}
    >
      <div className={styles.content}>
        <Skeleton className={styles.image} />

        <div className={styles.information}>
          <div className={styles.detail}>
            <Skeleton height={21} className={styles.name} />
            <Skeleton height={24} className={styles.price} />
          </div>

          <Skeleton height={40} className={styles.button} />

          <div className={styles.description}>
            <Skeleton className={styles.subtitle} />
            <Skeleton height={90} className={styles.text} />
          </div>
        </div>
      </div>
    </div>
  );
};
