import React, { memo } from 'react';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import Image from './Image';
import type { ProductWithHandle } from '../shopify';

function ProductCard({ product }: { product: ProductWithHandle }) {
  return (
    <Link key={product.id} href={`/products/${product.handle}`} passHref>
      <Box
        _hover={{ opacity: '80%' }}
        textAlign="center"
        position="relative"
        cursor="pointer">
        <Image
          src={product.images[0].src}
          alt={product.title}
          layout="responsive"
          width={1920}
          height={1080}
          placeholder="blur"
          objectPosition="center"
          objectFit="cover"
          blurDataURL={product.images[0].src}
        />

        <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
          {product.title}
        </Text>
        <Text position="absolute" bottom="5%" w="100%" color="gray.500">
          ${product.variants[0].price}
        </Text>
      </Box>
    </Link>
  );
}

export default memo(ProductCard);
