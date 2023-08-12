import clsx from 'clsx';

import styles from './Skeleton.module.scss';

interface ISkeletonProps {
  height?: number;
  className?: string;
}

export const Skeleton = ({ height = 15, className = '' }: ISkeletonProps) => {
  return (
    <div style={{ height }} className={clsx(styles.skeleton, className)}></div>
  );
};
