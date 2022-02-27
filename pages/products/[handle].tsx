import { Params } from 'next/dist/server/router';
import React from 'react';
import {
  fetchAllProducts,
  fetchProductWithHandle,
} from '../../services/products.services';
import { ProductWithHandle } from '../../shopify';

interface ProductPageProps {
  product: ProductWithHandle;
}

export default function ProductPage({ product }: ProductPageProps) {
  return <div>{product.title}</div>;
}

export async function getStaticPaths() {
  const allProducts = await fetchAllProducts();

  return {
    paths: (allProducts as ProductWithHandle[]).map(
      ({ handle }: { handle: string }) => ({
        params: { handle: handle.toString() },
      })
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const oneProduct = await fetchProductWithHandle(params.handle);

  return {
    props: {
      product: JSON.parse(JSON.stringify(oneProduct)),
    },
    // revalidate: 60,
  };
}
