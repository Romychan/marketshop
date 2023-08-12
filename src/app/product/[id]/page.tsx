import { Suspense } from 'react';
import type { Metadata } from 'next';

import { INextPageWithId } from '@/interfaces/pages';

import { getOneProduct } from '@/lib/product';

import { Detail } from '@/components/Detail/Detail';
import { DetailLoader } from '@/components/Detail/DetailLoader/DetailLoader';

export const generateMetadata = async ({
  params,
}: INextPageWithId): Promise<Metadata> => {
  const product = await getOneProduct(params.id);

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductDetailPage = ({ params }: INextPageWithId) => {
  return (
    <Suspense fallback={<DetailLoader />}>
      <Detail id={params.id} />
    </Suspense>
  );
};

export default ProductDetailPage;
