const path = require('path');
const { createConfig, resolveAliases } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');

const capitalize = (x='') => x.charAt(0).toUpperCase() + x.slice(1);
const componentName = (x='') => capitalize(path.dirname(x).split('/').pop());

module.exports = {
  title: 'Isolated Kit',
  components: '../src/components/*/index.js',
  // sections: [
  //   {
  //     name: 'Table of Content',
  //     content: '../README.md'
  //   },
  //   {
  //     name: 'Components',
  //     components: '../src/components/*/index.js',
  //   }
  // ],
  webpackConfig: createConfig([
    babel(),
    resolveAliases({
      'rsg-components/Wrapper': path.join(__dirname, 'wrapper'),
    })
  ]),
  getComponentPathLine(componentPath) {
    return `import { ${componentName(componentPath)} } from 'isolated-kit';`;
  },
};
