import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,ts}'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prettier/prettier': [
        'error',
        { singleQuote: true, semi: true, trailingComma: 'all' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    plugins: {
      prettier: prettier,
    },
  },
];
