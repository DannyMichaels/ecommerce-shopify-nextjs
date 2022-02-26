import Link from 'next/link';
import { fetchAllProducts } from '../services/products.services';
import { ProductWithHandle } from '../shopify';
import { useStore } from '../store';

interface HomeProps {
  products: ProductWithHandle[];
}

export default function Home({ products }: HomeProps) {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.handle}`} passHref>
          <p>{product.title}</p>
        </Link>
      ))}
    </div>
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
