import Link from 'next/link';
import { fetchAllProducts } from '../services/products.services';
import { ProductWithHandle } from '../shopify';
import { Box, Text, Grid } from '@chakra-ui/react';
import Image from '../components/Image';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';

interface HomeProps {
  products: ProductWithHandle[];
}

export default function Home({ products }: HomeProps) {
  return (
    <Box>
      <Hero />
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
      <ImageWithText
        image="/images/premium-bath-bombs.jpg"
        heading="Heading"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <ImageWithText
        reverse
        image="/images/bath-bomb-and-candle.jpg"
        heading="Second Heading"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet dictum sit amet. Tellus orci ac auctor augue. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Habitant morbi tristique senectus et. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Sollicitudin aliquam ultrices sagittis orci a. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Interdum posuere lorem ipsum dolor sit. Consequat interdum varius sit amet mattis. Suspendisse sed nisi lacus sed viverra tellus in. Enim neque volutpat ac tincidunt vitae. Curabitur gravida arcu ac tortor dignissim convallis. Mauris sit amet massa vitae. Ut sem viverra aliquet eget sit."
      />
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
