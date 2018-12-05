const path = require("path")                             // 絶対パスに変換するために
const htmlWebpackPlugin = require("html-webpack-plugin") // index.htmlをビルドチェインの中で作っちゃう

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/App.tsx",
  output: {
    filename: "js/bundle.js",
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
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ],
  devtool: isProd ? false : "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: false,
  },
}
