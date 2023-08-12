import { ReactNode } from 'react';

import styles from './Section.module.scss';

interface ISectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: ISectionProps) => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};
