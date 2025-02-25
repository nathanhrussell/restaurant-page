const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
      filename: "index.html",
    }),
  ],
};
