'use strict';

module.exports = {
  sourceType: 'unambiguous',
  exclude: [/node_modules[\\\/](@babel(?:\/|\\{1,2})runtime)/],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {ie: '11'},
        loose: true,
        modules: false,
        useBuiltIns: false,
        shippedProposals: true,
      },
    ],
  ],
  plugins: [
    ['babel-plugin-relay', {isDevVariable: '__DEV__'}],
    [require.resolve('./devExpression')],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESmodules: true,
        absoluteRuntime: true,
      },
    ],
  ],
};
