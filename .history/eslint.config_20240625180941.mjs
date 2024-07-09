import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as eslintPluginDeprecation from 'eslint-plugin-deprecation';
import * as eslintPluginSimpleSortImports from 'eslint-plugin-simple-import-sort';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';
import * as eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import * as eslintPluginOnlyWarn from 'eslint-plugin-only-warn';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginDeprecation.configs.recommended,
  eslintPluginSimpleSortImports.rules,
  eslintPluginPrettierRecommended.default,
  eslintPluginOnlyWarn,
  {
    // extends: [],
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    plugins: {
      deprecation: eslintPluginDeprecation,
      'simple-import-sort': eslintPluginSimpleSortImports,
      prettier: eslintPluginPrettier,
      'only-warn': eslintPluginOnlyWarn
    },
    rules: {
      //specific rules go here
    }
  }
);
