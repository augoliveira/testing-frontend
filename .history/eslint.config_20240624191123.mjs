import babelParser from "@babel/eslint-parser";
import pluginJs from "@eslint/js";
import importConfig from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import jsdocConfig from "eslint-plugin-jsdoc";
import jsoncConfig from "eslint-plugin-jsonc";
import reactHooks from "eslint-plugin-react-hooks";
import pluginReactAllConfig from "eslint-plugin-react/configs/all.js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import sortKeysFixConfig from "eslint-plugin-sort-keys-fix";
import spellcheck from "eslint-plugin-spellcheck";
import globals from "globals";

// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReactConfig,
// ];

export default [
    pluginJs.configs.recommended,
    {
        files: ["**/*.{js,jsx}"],
        ...jest.configs["flat/recommended"],
        plugins: {
            react: { ...pluginReactAllConfig, ...pluginReactConfig },
            jest,
            import: importConfig,
            jsdoc: jsdocConfig,
            jsonc: jsoncConfig,
            "react-hooks": reactHooks,
            "sort-keys-fix": sortKeysFixConfig,"jsx-a11y"
            spellcheck: spellcheck
        },
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    babelrc: false,
                    configFile: false,
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                },
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                it: "readonly",
                jest: "readonly",
                test: "readonly",
                expect: "readonly",
                indexedDB: "readonly",
                describe: "readonly"
            }
        },
        settings: { react: { version: "detect" } },
        rules: {
            "array-bracket-newline": ["error", "consistent"],
            "array-bracket-spacing": ["error", "never"],
            "array-callback-return": "error",
            "no-unused-vars": "warn",
            "array-element-newline": [
                "error",
                {
                    "ArrayExpression": "consistent",
                    "ArrayPattern": { "minItems": 3 }
                }
            ],
            "arrow-spacing": "error",
            "brace-style": ["error", "1tbs"],
            "camelcase": ["error", { "ignoreDestructuring": true, "properties": "never" }],
            "comma-dangle": ["error", "never"],
            "comma-spacing": [
                "error",
                {
                    "after": true,
                    "before": false
                }
            ],
            "curly": ["error", "all"],
            "default-case": "off",
            "eqeqeq": ["error", "always"],
            "func-call-spacing": ["error", "never"],
            "function-call-argument-newline": ["error", "consistent"],
            "import/first": "off",
            "import/order": ["error", { "groups": ["builtin", "external", "internal", "parent", "sibling", "index"] }],
            "indent": ["error", 4, { "SwitchCase": 1, "ignoredNodes": ["ConditionalExpression"] }],
            "jest/no-mocks-import": "off",
            "jsdoc/newline-after-description": 0, // Required for vs code auto formatting
            "jsdoc/require-hyphen-before-param-description": 1,
            "jsdoc/require-jsdoc": [
                "error",
                {
                    "require": {
                        "ArrowFunctionExpression": true,
                        "ClassExpression": true,
                        "FunctionDeclaration": true,
                        "FunctionExpression": true,
                        "MethodDefinition": true
                    }
                }
            ],
            "jsonc/sort-keys": "error",
            "keyword-spacing": ["error", { "after": true, "before": true }],
            "max-len": [
                "error",
                {
                    "code": 120,
                    "ignorePattern": '".*": ".*"' // Ignore pattern for strings in json as they can't be broken in multi lines
                }
            ],
            "no-console": "error",
            "no-dupe-else-if": "error",
            "no-extend-native": "off",
            "no-nested-ternary": "error",
            "no-useless-escape": "off",
            "no-var": "error",
            "object-curly-newline": ["error", { "consistent": true, "multiline": true }],
            "object-curly-spacing": ["error", "always"],
            "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
            "padding-line-between-statements": [
                "error",
                // Always one empty line before return statement
                {
                    "blankLine": "always",
                    "next": "return",
                    "prev": "*"
                },
                // Always one empty line between methods
                {
                    "blankLine": "always",
                    "next": ["block-like", "multiline-block-like"],
                    "prev": ["block-like", "multiline-block-like"]
                },
                // Avoids more than one empty line
                {
                    "blankLine": "never",
                    "next": "empty",
                    "prev": "empty"
                }
            ],
            "prefer-const": "error",
            "quote-props": ["error", "always"],
            "quotes": ["error", "double"],
            "radix": "off",
            "react-hooks/exhaustive-deps": "error",
            "react-hooks/rules-of-hooks": "error",
            // "react/jsx-boolean-value": ["warn", "always"],
            "react/jsx-closing-bracket-location": "error",
            "react/jsx-closing-tag-location": "error",
            "react/jsx-curly-brace-presence": [
                "error",
                {
                    "children": "ignore",
                    "props": "always"
                }
            ],
            "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
            "react/no-multi-comp": ["error", { "ignoreStateless": true }],
            "react/react-in-jsx-scope": "off",
            "semi": ["error", "always"],
            "sort-keys": [
                "error",
                "asc",
                {
                    "caseSensitive": true,
                    "minKeys": 2,
                    "natural": false
                }
            ],
            "sort-keys-fix/sort-keys-fix": "error",
            "space-before-blocks": "error",
            "space-infix-ops": ["error", { "int32Hint": false }],
            "spellcheck/spell-checker": [
                "error",
                {
                    "minLength": 4,
                    "skipWords": [
                 
                        "datasource",
                        "apis"
                    ]
                }
            ],
            // Added this so test file don't give error when accessing dom element using DOM api
            "testing-library/no-node-access": "off"
        }
    }
];