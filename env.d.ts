/// <reference types="vite/client" />
/// <reference types="@remix-run/cloudflare" />

// Enhance TypeScript's built-in typings.
import '@total-typescript/ts-reset';

import type {
  HydrogenContext,
  HydrogenSessionData,
  HydrogenEnv,
} from '@shopify/hydrogen';
import type {createAppLoadContext} from '~/lib/context';

declare global {
  /**
   * A global `process` object is only available during build to access NODE_ENV.
   */
  const process: {
    PUBLIC_STOREFRONT_API_TOKEN: string;
      PRIVATE_STOREFRONT_API_TOKEN: string;
      PUBLIC_STORE_DOMAIN: string;
      PRIVATE_ADMIN_API_VERSION: string;
      PRIVATE_ADMIN_API_TOKEN: string;
      SESSION_SECRET: string;
      SLEDGE_API_KEY: string;
      SLEDGE_INSTANT_SEARCH_API_KEY: string;
      NODE_ENV: 'production' | 'development';
      GA_TRACKING_ID: string;
  } & Env;

  /**
   * Declare expected Env parameter in fetch handler.
   */
  interface Env {
    SESSION_SECRET: string;
    PUBLIC_STOREFRONT_API_TOKEN: string;
    PRIVATE_STOREFRONT_API_TOKEN: string;
    PUBLIC_STORE_DOMAIN: string;
    PRIVATE_ADMIN_API_TOKEN: string;
    PRIVATE_ADMIN_API_VERSION: string;
    PUBLIC_STOREFRONT_ID: string;
    SLEDGE_API_KEY: string;
    SLEDGE_INSTANT_SEARCH_API_KEY: string;
    GA_TRACKING_ID: string;
  }
}

declare module '@remix-run/cloudflare' {
  interface AppLoadContext
    extends Awaited<ReturnType<typeof createAppLoadContext>> {
    // to change context type, change the return of createAppLoadContext() instead
  }

  interface SessionData extends HydrogenSessionData {
    // declare local additions to the Remix session data here
  }
}
