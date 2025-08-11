// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'

// Create a FlatCompat instance to support legacy "extends" syntax.
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    // Plugins in legacy format must be an array of plugin names.
    plugins: ['react-hooks'],
    rules: {
      // Disable react-in-jsx-scope (not needed in React 17+)
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@next/next/no-img-element': 'off',

      // Kiểm tra biến không sử dụng
      'no-unused-vars': 'off', // Tắt rule JS để dùng TypeScript rule
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Kiểm tra kiểu any
      '@typescript-eslint/no-explicit-any': 'error',

      // Kiểm tra hàm không sử dụng và code không thể truy cập
      'no-unreachable': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
    },
  }),
  {
    ignores: ['.next/**', 'node_modules/**', 'prisma/**'],
  },
]

export default eslintConfig
