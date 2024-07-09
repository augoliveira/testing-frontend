import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    // note - intentionally uses computed syntax to make it easy to sort the keys
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['@typescript-eslint/internal']: tseslintInternalPlugin,
      ['deprecation']: deprecationPlugin,
      ['eslint-comments']: eslintCommentsPlugin,
      ['eslint-plugin']: eslintPluginPlugin,
      ['import']: importPlugin,
      ['jest']: jestPlugin,
      ['jsdoc']: jsdocPlugin,
      ['jsx-a11y']: jsxA11yPlugin,
      ['react-hooks']: reactHooksPlugin,
      ['react']: reactPlugin,
      ['simple-import-sort']: simpleImportSortPlugin
    }
  },
  {
    rules: {
      // disallow ALL unused vars
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'all' }],
      '@typescript-eslint/sort-type-constituents': 'error',
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['arrowFunctions'] }
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-alias-methods': 'error',
      'jest/no-identical-title': 'error',
      'jest/no-jasmine-globals': 'error',
      'jest/no-test-prefixes': 'error',
      'jest/no-done-callback': 'error',
      'jest/no-test-return-statement': 'error',
      'jest/prefer-to-be': 'error',
      'jest/prefer-to-contain': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/prefer-spy-on': 'error',
      'jest/valid-expect': 'error',
      'jest/no-deprecated-functions': 'error'
    }
  }
];
