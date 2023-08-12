import { Suspense } from 'react';

import { INextPageWithId } from '@/interfaces/pages';

import { Detail } from '@/components/Detail/Detail';
import { ModalDetail } from '@/components/shared/ModalDetail/ModalDetail';
import { DetailLoader } from '@/components/Detail/DetailLoader/DetailLoader';

const ProductModal = ({ params }: INextPageWithId) => {
  return (
    <ModalDetail>
      <Suspense fallback={<DetailLoader quickView />}>
        <Detail id={params.id} quickView />
      </Suspense>
    </ModalDetail>
  );
};

export default ProductModal;
