import { ShopifyQuery } from '../shopify';

export const findAll = async () => {
  const query = `
  {
  products(first: 25) {
    edges {
      node {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`;
  const response = await ShopifyQuery(query);

  const allProducts = response.data?.products?.edges || [];

  return allProducts;
};

export const findById = async (id: string): Promise<ShopifyBuy.Product> => {
  const query = `
{
  product(id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc1NzM5NDY0MDA5OTY=") {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
      }
    }
    images(first: 5) {
      edges {
        node {
          url
          altText
        }
      }
    }
  }
} 
  `;

  const response = await ShopifyQuery(query);
  console.log('findOne', response);
  return response.data.product;
};

// for some reason not included in default type...
// @ts-ignore
export interface ProductWithHandle extends ShopifyBuy.Product {
  handle: string;
  priceRange: {
    minVariantPrice: { amount: string };
  };
  images: {
    edges: Array<{
      node: {
        altText: string;
        originalSrc: string;
        url: string;
        src: string;
      };
    }>;
  };
}

export interface Product extends ProductWithHandle {
  node: ProductWithHandle;
}
