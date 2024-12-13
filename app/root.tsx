import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type {LoaderArgs} from '@remix-run/cloudflare';
import {defer} from '@remix-run/cloudflare';
import type {Shop} from '@shopify/hydrogen/storefront-api-types';

const LAYOUT_QUERY = `#graphql
query layout {
  shop {
    name
    description
  }
}
`;

export async function loader({context}: LoaderArgs) {

  const {storefront} = await context.cloudflare;

  if (!storefront) return null

  const layout = await storefront.query(LAYOUT_QUERY)

  return layout.shop;
}

export default function App() {

  const data = useLoaderData<typeof loader>();

  console.log('data', data)
  

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
       <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );

  
}

