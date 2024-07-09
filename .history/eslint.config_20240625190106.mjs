import eslint from "@eslint/js";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import hooksPlugin from "eslint-plugin-react-hooks";
import { fixupPluginRules } from '@eslint/compat';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigESLint from "eslint-config-eslint";


export default [
  eslint.configs.recommended,
  ...eslintConfigESLint
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  
];