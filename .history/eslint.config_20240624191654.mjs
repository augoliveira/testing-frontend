import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  // mimic ESLintRC-style extends
  ...compat.extends('standard', 'example'),

  // mimic environments
  ...compat.env({
    es2020: true,
    node: true
  }),

  // mimic plugins
  ...compat.plugins('airbnb', 'react'),

  // translate an entire config
  ...compat.config({
    plugins: ['airbnb', 'react'],
    extends: 'standard',
    env: {
      es2020: true,
      node: true
    },
    rules: {
      semi: 'error'
    }
  })
];
