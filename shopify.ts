import Client, { Image, Query } from 'shopify-buy';

export const client = Client.buildClient({
  domain: String(process.env.SHOPIFY_DOMAIN),
  storefrontAccessToken: String(process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN),
});

const domain = process.env.SHOPIFY_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function ShopifyQuery(query: string) {
  const URL = `https://${domain}/api/2022-01/graphql.json`;

  const options: any = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error('Products not fetched');
  }
}
