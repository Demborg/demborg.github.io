import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  // All files.
  {
    ignores: ['.astro/'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginAstro.configs.all,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    parser: tseslint.parser,
    rules: {
      // override/add rules settings here, such as:
      // "no-unused-vars": "error"
    },
  },
);
