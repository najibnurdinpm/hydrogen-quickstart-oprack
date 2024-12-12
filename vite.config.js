import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';
import {vitePlugin as remix, cloudflareDevProxyVitePlugin as remixCloudflareDevProxy} from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    hydrogen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      buildDirectory: 'build',
    }),
    tsconfigPaths(),
  ],
  build: {
    outDir: "build/client", // Mengubah output build ke folder build/client
    emptyOutDir: true, // Membersihkan folder output sebelum build
    assetsDir: "", // Menghindari subfolder 'assets' di dalam build/client
    assetsInlineLimit: 0,
  },

  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: [],
    },
  },
});
