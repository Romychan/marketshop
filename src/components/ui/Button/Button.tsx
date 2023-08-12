import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: 'primary' | 'secondary' | 'transparent';
}

export const Button = ({
  state = 'primary',
  className = '',
  children,
  ...rest
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button className={clsx(styles.button, styles[state], className)} {...rest}>
      {children}
    </button>
  );
};
