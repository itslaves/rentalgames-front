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
  globals: {
    gapi: 'readonly',
    naver: 'readonly',
    Kakao: 'readonly',
  },
  rules: {
    'no-empty': 'off',
    'no-unused-vars': ['error', {
      varsIgnorePattern: 'Vue',
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
