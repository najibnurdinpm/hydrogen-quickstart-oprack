// vite.config.js
import { defineConfig } from "file:///D:/cloudflare/hydrogen-quickstart-oprack/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///D:/cloudflare/hydrogen-quickstart-oprack/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { vitePlugin as remix, cloudflareDevProxyVitePlugin as remixCloudflareDevProxy } from "file:///D:/cloudflare/hydrogen-quickstart-oprack/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///D:/cloudflare/hydrogen-quickstart-oprack/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    hydrogen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      },
      buildDirectory: "build"
    }),
    tsconfigPaths()
  ],
  build: {
    outDir: "build/client",
    // Mengubah output build ke folder build/client
    emptyOutDir: true,
    // Membersihkan folder output sebelum build
    assetsDir: "",
    // Menghindari subfolder 'assets' di dalam build/client
    assetsInlineLimit: 0
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
      include: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjbG91ZGZsYXJlXFxcXGh5ZHJvZ2VuLXF1aWNrc3RhcnQtb3ByYWNrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjbG91ZGZsYXJlXFxcXGh5ZHJvZ2VuLXF1aWNrc3RhcnQtb3ByYWNrXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jbG91ZGZsYXJlL2h5ZHJvZ2VuLXF1aWNrc3RhcnQtb3ByYWNrL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHtoeWRyb2dlbn0gZnJvbSAnQHNob3BpZnkvaHlkcm9nZW4vdml0ZSc7XG5pbXBvcnQge3ZpdGVQbHVnaW4gYXMgcmVtaXgsIGNsb3VkZmxhcmVEZXZQcm94eVZpdGVQbHVnaW4gYXMgcmVtaXhDbG91ZGZsYXJlRGV2UHJveHl9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVtaXhDbG91ZGZsYXJlRGV2UHJveHkoKSxcbiAgICBoeWRyb2dlbigpLFxuICAgIHJlbWl4KHtcbiAgICAgIHByZXNldHM6IFtoeWRyb2dlbi5wcmVzZXQoKV0sXG4gICAgICBmdXR1cmU6IHtcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGJ1aWxkRGlyZWN0b3J5OiAnYnVpbGQnLFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiYnVpbGQvY2xpZW50XCIsIC8vIE1lbmd1YmFoIG91dHB1dCBidWlsZCBrZSBmb2xkZXIgYnVpbGQvY2xpZW50XG4gICAgZW1wdHlPdXREaXI6IHRydWUsIC8vIE1lbWJlcnNpaGthbiBmb2xkZXIgb3V0cHV0IHNlYmVsdW0gYnVpbGRcbiAgICBhc3NldHNEaXI6IFwiXCIsIC8vIE1lbmdoaW5kYXJpIHN1YmZvbGRlciAnYXNzZXRzJyBkaSBkYWxhbSBidWlsZC9jbGllbnRcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMCxcbiAgfSxcblxuICBzc3I6IHtcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIC8qKlxuICAgICAgICogSW5jbHVkZSBkZXBlbmRlbmNpZXMgaGVyZSBpZiB0aGV5IHRocm93IENKUzw+RVNNIGVycm9ycy5cbiAgICAgICAqIEZvciBleGFtcGxlLCBmb3IgdGhlIGZvbGxvd2luZyBlcnJvcjpcbiAgICAgICAqXG4gICAgICAgKiA+IFJlZmVyZW5jZUVycm9yOiBtb2R1bGUgaXMgbm90IGRlZmluZWRcbiAgICAgICAqID4gICBhdCAvVXNlcnMvLi4uL25vZGVfbW9kdWxlcy9leGFtcGxlLWRlcC9pbmRleC5qczoxOjFcbiAgICAgICAqXG4gICAgICAgKiBJbmNsdWRlICdleGFtcGxlLWRlcCcgaW4gdGhlIGFycmF5IGJlbG93LlxuICAgICAgICogQHNlZSBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL2RlcC1vcHRpbWl6YXRpb24tb3B0aW9uc1xuICAgICAgICovXG4gICAgICBpbmNsdWRlOiBbXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULFNBQVEsb0JBQW1CO0FBQzNVLFNBQVEsZ0JBQWU7QUFDdkIsU0FBUSxjQUFjLE9BQU8sZ0NBQWdDLCtCQUE4QjtBQUMzRixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCx3QkFBd0I7QUFBQSxJQUN4QixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsTUFDSixTQUFTLENBQUMsU0FBUyxPQUFPLENBQUM7QUFBQSxNQUMzQixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLE1BQ0EsZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLGFBQWE7QUFBQTtBQUFBLElBQ2IsV0FBVztBQUFBO0FBQUEsSUFDWCxtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXWixTQUFTLENBQUM7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
