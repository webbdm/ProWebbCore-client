const path = require("path");
const webpack = require("webpack");

const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      minify: false,
      // copys the content of the existing index.html to the new /build index.html
      template: path.resolve("./index.html"),
      favicon: "./assets/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env.API_BASE_URL": JSON.stringify(process.env.API_BASE_URL),
      "process.env.BUCKET_URL": JSON.stringify(process.env.BUCKET_URL),
    }),
    // new CopyWebpackPlugin({ patterns: [{ from: path.resolve(__dirname, "/assets"), to: "assets" }] }),
  ],
  devServer: {
    contentBase: "./build",
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
};
