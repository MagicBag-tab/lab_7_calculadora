// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [js.configs.recommended, {
  files: ['src/**/*.{js,jsx,ts,tsx}'],
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooks,
  },
  languageOptions: {
    globals: globals.browser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'semi': ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
  },
}, ...storybook.configs["flat/recommended"]];