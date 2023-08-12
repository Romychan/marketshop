'use client';

import Link from 'next/link';

import { CATALOG_PATH } from '@/constants/routes';

import { Logo } from '../ui/Logo/Logo';
import { CartWidget } from '../shared/CartWidget/CartWidget';
import { Navigation } from '../Navigation/Navigation';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.content}>
            <Link href={CATALOG_PATH}>
              <Logo className={styles.logo} />
            </Link>
            <Navigation />
          </div>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};
