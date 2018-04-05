const config = require('./tools/webpack.config.js');

module.exports = {
  ignore: ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts', '**/components/App/**', '**/components/Html/**'],
  webpackConfig: config[0]
};