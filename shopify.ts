import Client from 'shopify-buy';

export const client = Client.buildClient({
  domain: String(process.env.SHOPIFY_DOMAIN),
  storefrontAccessToken: String(process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN),
});
