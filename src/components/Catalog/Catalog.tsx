import { getAllProducts } from '@/lib/product';

import { Card } from '../shared/Card/Card';

import styles from './Catalog.module.scss';

export const Catalog = async () => {
  const products = await getAllProducts();

  return (
    <div className={styles.items}>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            imageSrc={product.src}
            price={product.price}
          />
        );
      })}
    </div>
  );
};
