const { createConfig } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');

module.exports = {
  title: 'Isolated Kit',
  components: 'src/components/*/index.js',
  context: {
    'isolated-kit': './src/'
  },
  webpackConfig: 	createConfig([
    babel()
  ]),
};
