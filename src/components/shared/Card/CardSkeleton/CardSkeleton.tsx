import { Skeleton } from '@/components/ui/Skeleton/Skeleton';

import styles from './CardSkeleton.module.scss';

export const CardSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton className={styles.image} />
      <div className={styles.information}>
        <Skeleton className={styles.name} />
        <Skeleton className={styles.name} />
      </div>

      <Skeleton className={styles.price} />
    </div>
  );
};
