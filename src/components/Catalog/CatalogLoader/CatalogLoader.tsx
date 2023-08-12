import { CardSkeleton } from '@/components/shared/Card/CardSkeleton/CardSkeleton';

import styles from './CatalogLoader.module.scss';

export const CatalogLoader = () => {
  return (
    <div className={styles.items}>
      {Array(8)
        .fill('')
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};
