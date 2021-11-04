const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// 打包分析工具
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// 显示打包进度
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");

const webpackConfig = {
  mode: process.env.NODE_ENV,
  devtool: "eval-source-map",
  entry: path.resolve(__dirname, "./src/layout/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name][fullhash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: [
              ["import", { libraryName: "antd", style: true }],
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "@primary-color": "#DE678F", //修改antd主题色
                  "@font-size-base": "13px", //字号
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|wav|mp3|ttf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: { querystring: false },
  },
  plugins: [
    new AntdDayjsWebpackPlugin(),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new SimpleProgressWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "TRBOARD",
      template: path.resolve(__dirname, "./src/layout/index.html"),
    }),
  ],
  optimization: {
    // 是否最小化
    minimize: Boolean(process.env.NODE_ENV === "production"),
    // 最小化插件
    minimizer: [new TerserWebpackPlugin()],
  },
  performance: {
    hints: false,
  },
  devServer: {
    port: 8000,
    static: {
      directory: path.join(__dirname, "src"),
    },
    open: true,
    historyApiFallback: true,
  },
};

module.exports = webpackConfig;
