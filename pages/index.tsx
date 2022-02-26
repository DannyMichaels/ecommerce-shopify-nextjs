import { fetchAllProducts } from '../services/products.services';
import { useStore } from '../store';

interface HomeProps {
  products: ShopifyBuy.Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
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
