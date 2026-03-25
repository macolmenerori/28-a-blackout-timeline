import { readFileSync } from 'node:fs';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  version: string;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'inject-datadog',
      transformIndexHtml(html) {
        const datadogScript = `
      (function(h,o,u,n,d) {
        h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}};
        d=o.createElement(u);d.async=1;d.src=n;
        n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
      })(window,document,'script','https://www.datadoghq-browser-agent.com/eu1/v6/datadog-rum.js','DD_RUM');
      window.DD_RUM.onReady(function() {
        window.DD_RUM.init({
          clientToken: 'pub30316278914b8a691a059446558cab93',
          applicationId: 'b0ab7614-329f-4f97-bf2a-4dac3250376d',
          site: 'datadoghq.eu',
          service: '28-a-blackout-timeline',
          env: 'prod',
          version: '${pkg.version}',
          sessionSampleRate: 100,
          sessionReplaySampleRate: 20,
          trackUserInteractions: true,
          trackBfcacheViews: true,
          trackResources: true,
          trackLongTasks: true,
          defaultPrivacyLevel: 'allow'
        });
      });
    `;

        // Inject the script in the head
        return html.replace('</head>', `  <script>${datadogScript}</script>\n  </head>`);
      }
    }
  ],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version)
  },
  server: {
    port: 3000
  },
  ssr: {
    noExternal: ['@macolmenerori/component-library', 'react-helmet-async']
  },
  ssgOptions: {
    formatting: 'minify'
  }
});
