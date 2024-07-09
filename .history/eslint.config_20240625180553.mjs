import eslint from '@eslint/js';
import eslintPluginDeprecation from 'eslint-plugin-deprecation';
import eslintPluginComments from 'eslint-plugin-eslint-comments';
import * as eslintPluginOnlyWarn from 'eslint-plugin-only-warn';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginSimpleSortImports from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.ts'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked
  ],
  linterOptions: {
    reportUnusedDisableDirectives: true
  },
  plugins: {
    deprecation: eslintPluginDeprecation,
    'eslint-comments': eslintPluginComments,
    'simple-import-sort': eslintPluginSimpleSortImports,
    prettier: eslintPluginPrettier, //must be after all others, except for the only-warn plugin
    'only-warn': eslintPluginOnlyWarn //must be very last so all plugins before can be turned into warnings!
  },
  rules: {
    //Base ESLint
    //my rules go here...

    //ESLint Plugins
    'eslint-comments/no-unused-disable': 'warn',
    ...eslintPluginDeprecation.configs.recommended.rules,
    ...eslintPluginPrettier.rules //must be last!
  }
});
