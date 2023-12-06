import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/e2e/*.spec.ts',
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080
  }
});
