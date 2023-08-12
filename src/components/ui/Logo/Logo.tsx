import clsx from 'clsx';

import styles from './Logo.module.scss';

interface ILogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: ILogoProps) => {
  return <h1 className={clsx(styles.logo, className)}>MarketShop</h1>;
};
