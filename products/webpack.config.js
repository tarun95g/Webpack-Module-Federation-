const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  entry: "./index.js",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 1338,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "product",
      filename: "remoteEntry.js",
      exposes: {
        "./products": "./app.jsx",
      },
      shared: [
        {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
