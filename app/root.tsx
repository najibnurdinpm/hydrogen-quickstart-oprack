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

