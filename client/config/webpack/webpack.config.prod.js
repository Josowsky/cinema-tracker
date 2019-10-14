// const webpack = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig.config, {
  mode: "production",
  devtool: false,
  entry: [baseConfig.indexFile],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [baseConfig.reactPath],
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  }
});
