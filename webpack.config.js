const path = require("path");
const HTMLplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLplugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
