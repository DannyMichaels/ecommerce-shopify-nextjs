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

export const findByHandle = async (handle: string) => {
  const query = `
  {
    productByHandle(handle: "${handle}") {
    	collections(first: 1) {
      	edges {
          node {
            products(first: 5) {
              edges {
                node {
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  handle
                  title
                  id
                  totalInventory
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
        }
    	}
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              originalSrc
              altText
            }
            title
            id
            availableForSale
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyQuery(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
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
  variants: { edges: Array<{ node: ShopifyBuy.ProductVariant }> };
}

export interface Product extends ProductWithHandle {
  node: ProductWithHandle;
}
