import { IProduct } from '@/interfaces/product';

export const getAllProducts = async (): Promise<IProduct[]> => {
  return await fetch(`${process.env.API_URL}/products`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export const getOneProduct = async (id: string | number): Promise<IProduct> => {
  return await fetch(`${process.env.API_URL}/products/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
