import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  plugins: {
    'typescript-eslint': tseslint.plugin
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  eslintConfigPrettier,
];