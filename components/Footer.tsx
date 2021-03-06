import React from 'react';
import Link from 'next/link';
import { Grid, Box, Text, VStack } from '@chakra-ui/react';
import Image from './Image';

export default function Footer() {
  return (
    <Box backgroundColor="#FFA8E2">
      <Grid
        templateColumns={['repeat(1,1fr)', 'repeat(3, 1fr)']}
        color="white"
        fontWeight="bold">
        <Image
          src="/images/bombs_group_1.png "
          placeholder="blur"
          blurDataURL="/images/bombs_group_1.png"
          alt="bath bombs"
          layout="responsive"
          objectFit="contain"
          width={670}
          height={325}
        />
        <VStack p="2rem">
          <Link href="/">The Green Blast</Link>
          <Link href="/">The Blue Berry</Link>
          <Link href="/">The Yellow Mellow</Link>
        </VStack>

        <VStack p="2rem">
          <Link href="/">About Us</Link>
          <Link href="/">Learn More</Link>
          <Link href="/">Sustainability</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="#fff"
          w="100%"
          borderTop="1px solid #fff"
          p="1rem">
          &copy; 2022 Daniel Michael
        </Text>
      </Box>
    </Box>
  );
}
