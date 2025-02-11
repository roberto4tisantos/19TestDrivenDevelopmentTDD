import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

// export default defineConfig({
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "vite",
//     },
//     specPattern: "cypress/component/**/*.cy.{ts,tsx}",
//   },
// });

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});