const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ],
  extends: [],
  plugins: [],
  settings: {},
  rules: {
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    indent: [2, 2],
    'comma-dangle': ['error', 'never'],
    'no-plusplus': 0,
    'linebreak-style': 'off',
    'no-bitwise': ['error', { allow: ['&'] }],
    'no-nested-ternary': 0,
    'class-methods-use-this': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
