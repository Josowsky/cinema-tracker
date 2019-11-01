const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const reactPath = path.join(__dirname, "../../src");
const buildPath = path.join(__dirname, "../../build");
const publicPath = path.join(__dirname, "../../public");
const indexFile = path.join(reactPath, "index.js");

module.exports = {
  reactPath,
  buildPath,
  indexFile,
  config: {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "url-loader"
            }
          ]
        }
      ]
    },
    output: {
      path: buildPath,
      filename: "react_bundle.js"
    },
    resolve: {
      modules: ["node_modules", reactPath],
      extensions: [".js", ".ts", ".json", ".jsx", ".tsx"]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: `${publicPath}/index.html`,
        filename: "index.html"
      })
    ]
  }
};
