import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Needed because we test DOM components returning HTML strings mapped to the DOM
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
      exclude: [
        'eslint.config.js',
        'vitest.config.js',
        '**/*.css',
      ],
    },
  },
});
