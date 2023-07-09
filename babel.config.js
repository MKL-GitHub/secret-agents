module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@async-storage': './src/async-storage',
          '@components': './src/components',
          '@constants': './src/constants',
          '@containers': './src/containers',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@types': './src/types',
          '@utils': './src/utils',

          '@async-storage/*': './src/async-storage/*',
          '@components/*': './src/components/*',
          '@constants/*': './src/constants/*',
          '@containers/*': './src/containers/*',
          '@navigation/*': './src/navigation/*',
          '@screens/*': './src/screens/*',
          '@services/*': './src/services/*',
          '@store/*': './src/store/*',
          '@types/*': './src/types/*',
          '@utils/*': './src/utils/*'
        }
      }
    ]
  ]
};
