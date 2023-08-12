'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { ROUTES_LINK } from '@/constants/routes';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {ROUTES_LINK.map((route) => (
          <li key={route.href} className={styles.item}>
            <Link
              href={route.href}
              className={clsx(styles.link, {
                [styles.active]: pathname === route.href,
              })}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
