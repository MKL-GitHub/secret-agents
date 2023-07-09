module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native', 'eslint-config-prettier'],
  plugins: ['prettier', 'react-native'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsx: true
  }
};
