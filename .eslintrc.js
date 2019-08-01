module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-empty': 'off',
    'import/order': 'off',
    'no-unused-vars': ['error', {
      varsIgnorePattern: 'Vue',
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
