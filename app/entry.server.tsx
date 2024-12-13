import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {EntryContext} from '@remix-run/cloudflare';
import {createStorefrontClient} from '@shopify/hydrogen';

type Context = EventContext<Env, string, unknown>;

declare module '@remix-run/cloudflare' {
  interface CloudflareContext {
    // Tambahkan tipe untuk properti kustom Anda
    session?: {
      get: (key: string) => Promise<string | null>;
      set: (key: string, value: string) => Promise<void>;
    };
    env?: {
      [key: string]: string;
    };
    storefront?: {
      query: (query: string) => Promise<any>;
      mutation: (mutation: string) => Promise<any>;
    };
  }
}

async function setContext(context) {
  context.cloudflare = {
    ...context.cloudflare,
    env: process.env,
    storefront: await createStorefrontClient({
      publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
      storeDomain: `https://${process.env.PUBLIC_STORE_DOMAIN}`,
    }).storefront,
    // Tambahkan properti kustom lainnya
    session: {
      get: (key: string) => {
        // Implementasi get session
      },
      set: (key: string, value: string) => {
        // Implementasi set session
      }
    }
  };
}


export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  context: { cloudflare: { env: any; context: any; [key: string]: any } }
) {

  await setContext(context)

  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
