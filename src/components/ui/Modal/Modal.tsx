'use client';

import { ReactNode, useEffect } from 'react';

import { Icon } from '../Icon/Icon';

import styles from './Modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size={21} />
        </button>

        <div className={styles.background}>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );
};
