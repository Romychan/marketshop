import { Suspense } from 'react';
import type { Metadata } from 'next';

import { Section } from '@/components/ui/Section/Section';
import { Catalog } from '@/components/Catalog/Catalog';
import { CatalogLoader } from '@/components/Catalog/CatalogLoader/CatalogLoader';

export const metadata: Metadata = {
  title: 'MarketShop - Catalog',
  description: 'The largest catalog of goods in MarketShop',
};

const CatalogPage = () => {
  return (
    <Section title="Catalog">
      <Suspense fallback={<CatalogLoader />}>
        <Catalog />
      </Suspense>
    </Section>
  );
};

export default CatalogPage;
