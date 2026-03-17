// eslint.config.js — ESLint flat config (ESLint v9+/v10)
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import-x';
import globals from 'globals';

export default [
  // 1. Apply ESLint recommended rules to all JS files
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
  },

  // 2. Project-specific rules + Prettier integration + Import boundaries
  {
    files: ['**/*.js'],
    plugins: {
      prettier: prettierPlugin,
      'import-x': importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      // --- Possible errors ---
      'no-console': 'warn',
      'no-debugger': 'error',

      // --- Best practices ---
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',

      // --- Code clarity ---
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-shadow': 'warn',

      // --- Atomic Design Dependencies ---
      // Atoms cannot import molecules, organisms, templates, pages
      // Molecules cannot import organisms, templates, pages
      // Organisms cannot import templates, pages
      'import-x/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/components/atoms/**/*',
              from: [
                './src/components/molecules/**/*',
                './src/components/organisms/**/*',
                './src/components/templates/**/*',
                './src/components/pages/**/*',
              ],
              message: 'Atoms cannot import from higher-level components.',
            },
            {
              target: './src/components/molecules/**/*',
              from: [
                './src/components/organisms/**/*',
                './src/components/templates/**/*',
                './src/components/pages/**/*',
              ],
              message: 'Molecules cannot import from higher-level components.',
            },
            {
              target: './src/components/organisms/**/*',
              from: [
                './src/components/templates/**/*',
                './src/components/pages/**/*',
              ],
              message: 'Organisms cannot import from higher-level components.',
            },
          ],
        },
      ],

      // --- Prettier (formatting as a lint rule) ---
      'prettier/prettier': 'error',
    },
  },

  // 4. Specific boundary rules for the App Shell (main.js)
  {
    files: ['**/main.js'],
    rules: {
      // main.js can only import modules via their index.js public API
      'import-x/no-internal-modules': [
        'error',
        {
          allow: ['**/modules/*/index.js', '**/style.css'],
        },
      ],
    },
  },

  // 5. Disable formatting rules that Prettier handles
  prettierConfig,
];
