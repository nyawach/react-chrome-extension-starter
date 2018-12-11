const path = require("path")                             // 絶対パスに変換するために
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin") // index.htmlをビルドチェインの中で作っちゃう

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    "js/script.js": "./src/js/entries/script.tsx",
  },
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        loader: "tslint-loader",
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          emitErrors: true,
        }
      },
      {
        loader: "ts-loader",
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: isProd ? "tsconfig.json" : "tsconfig.dev.json",
        }
      },
      {
        loader: "pug-loader",
        test: /\.pug$/,
        exclude: [
          /node_modules/
        ],
        options: {
          pretty: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  plugins: [
    new CleanWebackPlugin("./dist"),
    new HtmlWebpackPlugin({
      filename: "popup.html",
      template: "./src/html/popup.pug",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "option.html",
      template: "./src/html/option.pug",
      inject: false,
    }),
    new CopyWebpackPlugin([{ from: 'static', to: './' }]),
  ],
  devtool: isProd ? false : "inline-source-map",
}
