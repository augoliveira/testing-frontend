import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  rules: {
    "space-before-function-paren": ["error", "never"],
    "curly": ["error", "all"],
    "comma-dangle": ["error", "always-multiline"],
    "padding-line-between-statements": ["error", {
      "blankLine": "always",
      "prev": "*",
      "next": "return"
    }]
  }
];