module.exports = {
  root: true,
  // extends: ['@react-native']
  extends: ['@react-native', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react-native']
  // parserOptions: {
  //   sourceType: 'module',
  //   tsx: true
  // },
  // settings: {
  //   'import/resolver': {
  //     'babel-module': {
  //       alias: {
  //         components: './src/components'
  //       }
  //     }
  //   }
  // }
};
