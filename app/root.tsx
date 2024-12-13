import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type {LinksFunction, LoaderArgs} from '@remix-run/cloudflare';
import {defer} from '@remix-run/cloudflare';

import styles from './styles/app.css';

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
  ];
};

export default function App() {

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