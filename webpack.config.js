'use strict';

const path = require('path');

module.exports = (env, argv) => {
  const {mode} = argv;

  return {
    mode,
    entry: path.resolve('src/index.js'),
    output: {
      path: path.resolve('dist'),
      filename: '[name].bundle.js',
    },
    resolve: {
      modules: [path.resolve('node_modules'), 'node_modules'],
      extensions: ['.mjs', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        {
          test: /\.(mjs|js|jsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                envName: mode,
                configFile: true,
                cacheDirectory: true,
                cacheCompression: false,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'vendors',
      },
      runtimeChunk: false,
      minimize: false,
    },
    performance: false,
    devtool: false,
  };
};
