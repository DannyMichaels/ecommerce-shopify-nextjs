import React, { memo } from 'react';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import Image from './Image';
import { Product } from '../models/product.model';

function ProductCard({ product }: { product: Product }) {
  const { altText, originalSrc } = product.node.images.edges[0].node;

  return (
    <Link
      key={product.node.id}
      href={`/products/${product.node.handle}`}
      passHref>
      <Box
        _hover={{ opacity: '80%' }}
        textAlign="center"
        position="relative"
        cursor="pointer">
        <Image
          src={originalSrc}
          alt={altText || product.title}
          layout="responsive"
          width={1920}
          height={1080}
          placeholder="blur"
          objectPosition="center"
          objectFit="cover"
          blurDataURL={originalSrc}
        />

        <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
          {product.node.title}
        </Text>
        <Text position="absolute" bottom="5%" w="100%" color="gray.500">
          ${product.node.priceRange.minVariantPrice.amount}
        </Text>
      </Box>
    </Link>
  );
}

export default memo(ProductCard);
