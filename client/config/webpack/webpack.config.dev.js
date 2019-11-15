const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const baseConfig = require('./webpack.config.base');

module.exports = (env = {}) =>
  merge(baseConfig.config, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', baseConfig.indexFile],
    devServer: {
      host: 'localhost',
      port: 3000,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      watchOptions: {
        ignored: ['node_modules'],
      },
      proxy: {
        '/graphql': 'http://localhost:5000',
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [baseConfig.reactPath],
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: 'eslint-loader',
            },
          ],
        },
      ],
    },
    plugins: env.analyzeBundle
      ? [new webpack.HotModuleReplacementPlugin(), new BundleAnalyzerPlugin()]
      : [new webpack.HotModuleReplacementPlugin()],
  });
