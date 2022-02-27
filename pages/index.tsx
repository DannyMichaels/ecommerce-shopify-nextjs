import { Fragment, useMemo } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';
import ProductCard from '../components/ProductCard';
import RichText from '../components/RichText';
import { fetchAllProducts } from '../services/products.services';
import type { Product } from './../models/product.model';

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const CARDS = useMemo(
    () =>
      products.map((product: Product) => (
        <Fragment key={product.node.id}>
          <ProductCard product={product} />
        </Fragment>
      )),
    [products]
  );

  return (
    <Box>
      <Hero />
      <RichText
        heading="The relaxation you've been waiting for."
        text="Our bath bombs guarantee a fun, relaxing and colorful night."
      />

      <Grid templateColumns="repeat(3, 1fr)">{CARDS}</Grid>
      <RichText heading="Treat yourself!" />
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

export async function getStaticProps() {
  const products = await fetchAllProducts();

  return {
    props: {
      products,
    },
  };
}
