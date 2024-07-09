import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    extends: [
      'eslint:recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:sonarjs/recommended',
      'plugin:unicorn/recommended',
      'plugin:security/recommended',
      'plugin:react-hooks/recommended'
    ],
    rules: {
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'simple-import-sort/sort': 'error',
      'unicorn/filename-case': 'off'
    }
  }
];
