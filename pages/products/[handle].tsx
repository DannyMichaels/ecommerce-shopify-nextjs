import { Params } from 'next/dist/server/router';
import React from 'react';
import {
  fetchAllProducts,
  fetchProductWithHandle,
} from '../../services/products.services';
import { ProductWithHandle } from '../../shopify';
import Image from '../../components/Image';
import { useStore } from '../../store';
import shallow from 'zustand/shallow';

import {
  Box,
  Grid,
  Text,
  Button,
  Heading,
  Flex,
  Center,
} from '@chakra-ui/react';

export default function ProductPage({ product }: ProductPageProps) {
  const addItemToCheckout = useStore(
    (store) => store.addItemToCheckout,
    shallow
  );

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <Image
          src={product.images[0].src}
          alt={product.title}
          layout="responsive"
          objectFit="cover"
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL={product.images[0].src}
        />

        <Box>
          <Heading>{product.title}</Heading>
          <Text>${product.variants[0].price}</Text>
          <Text>{product.description}</Text>
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            Add To Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
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

interface ProductPageProps {
  product: ProductWithHandle;
}
