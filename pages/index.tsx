import Link from 'next/link';
import { fetchAllProducts } from '../services/products.services';
import { ProductWithHandle } from '../shopify';
import { useStore } from '../store';
import { Box, Text, Grid } from '@chakra-ui/react';
import Image from '../components/Image';

interface HomeProps {
  products: ProductWithHandle[];
}

export default function Home({ products }: HomeProps) {
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.handle}`} passHref>
            <Box _hover={{ opacity: '80%' }} textAlign="center">
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

              <Text>{product.title}</Text>
              <Text>${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export async function getServerSideProps() {
  const products = await fetchAllProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
