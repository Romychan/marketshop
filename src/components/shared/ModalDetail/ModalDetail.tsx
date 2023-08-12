'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { Modal } from '@/components/ui/Modal/Modal';

interface IModalDetailProps {
  children: ReactNode;
}

export const ModalDetail = ({ children }: IModalDetailProps) => {
  const router = useRouter();

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      {children}
    </Modal>
  );
};
