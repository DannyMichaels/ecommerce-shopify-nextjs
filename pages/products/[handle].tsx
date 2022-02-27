import { Params } from 'next/dist/server/router';
import React from 'react';
import {
  fetchAllProducts,
  fetchProductWithHandle,
} from '../../services/products.services';
import Image from '../../components/Image';
import { useStore } from '../../store';
import shallow from 'zustand/shallow';
import { Box, Grid, Text, Button, Heading, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import type { Product, ProductWithHandle } from '../../models/product.model';

export default function ProductPage({ product }: ProductPageProps) {
  const addItemToCheckout = useStore(
    (store) => store.addItemToCheckout,
    shallow
  );

  const { altText, url } = product.images.edges[0].node;

  return (
    <>
      <Head>
        <title>Bath Bombs | {product.title}</title>
        <meta name="description" content={product.description} />
      </Head>

      <Box p="2rem">
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m="auto">
          <Image
            src={url}
            alt={altText || product.title}
            layout="responsive"
            objectFit="cover"
            width={1920}
            height={1080}
            placeholder="blur"
            blurDataURL={url}
          />

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            px="2rem">
            <Heading pb="2rem">{product.title}</Heading>
            <Text fontWeight="bold" pb="2rem">
              ${product.priceRange.minVariantPrice.amount}
            </Text>
            <Text pb="2rem" color="gray.500">
              {product.description}
            </Text>
            <Button
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
              _hover={{ opacity: '70%' }}
              backgroundColor="#FF388D"
              w="10rem"
              color="#fff">
              Add To Cart
            </Button>
          </Flex>
        </Grid>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const allProducts = await fetchAllProducts();

  return {
    // @ts-ignore
    paths: (allProducts as Product[]).map((product: Product) => ({
      params: { handle: product.node.handle.toString() },
    })),
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
