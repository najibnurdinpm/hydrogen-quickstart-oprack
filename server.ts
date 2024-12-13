// @ts-ignore
// Virtual entry point for the app
import * as remixBuild from 'virtual:remix/server-build';
import {storefrontRedirect} from '@shopify/hydrogen';
import {createRequestHandler} from '@remix-run/cloudflare';
import {createAppLoadContext} from '~/lib/context';

import { createStorefrontClient } from '@shopify/hydrogen';

export const hydrogenMiddleware = (context) => {
  const storefront = createStorefrontClient({
    storeDomain: 'your-store.myshopify.com',
    storefrontToken: 'your-storefront-access-token',
    storefrontApiVersion: '2023-04',
  });
  context.storefront = storefront; // Tambahkan storefront ke context
};


/**
 * Export a fetch handler in module format.
 */
export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {

    console.log('running di server.ts')

    try {
      const appLoadContext = await createAppLoadContext(
        request,
        env,
        executionContext,
      );

      const context = {};
      hydrogenMiddleware(context);

      /**
       * Create a Remix request handler and pass
       * Hydrogen's Storefront client to the loader context.
       */
      const handleRequest = createRequestHandler({
        build: remixBuild,
        storeFront: 'ini adalah storefront',
        mode: process.env.NODE_ENV,
        getLoadContext: () => context,
      });

      const response = await handleRequest(request);

      if (appLoadContext.session.isPending) {
        response.headers.set(
          'Set-Cookie',
          await appLoadContext.session.commit(),
        );
      }

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from the app.
         * If the redirect doesn't exist, then `storefrontRedirect`
         * will pass through the 404 response.
         */
        return storefrontRedirect({
          request,
          response,
          storefront: appLoadContext.storefront,
        });
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
};
