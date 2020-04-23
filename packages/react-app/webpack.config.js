const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const APP_PATH = "./src";
const PUBLIC_PATH = "./public";

const config = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/build.js",
    globalObject: "this"
  },

  devServer: {
    contentBase: "./",
    historyApiFallback: true
  },

  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              // require.resolve("style-loader"),
              { loader: MiniCssExtractPlugin.loader },
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1,
                  modules: true
                }
              }
            ]
          },
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: "static/media/[name].[ext]"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/main.css"
    }),
    new CopyPlugin([{ from: "public", to: ".", ignore: ["*.html"] }])
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.entry = path.resolve(__dirname, APP_PATH);
    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: true,
        template: `${PUBLIC_PATH}/index.html`
      })
    );
  } else {
    config.entry = path.resolve(__dirname, APP_PATH);
    config.plugins.push(
      new Webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    );

    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: true,
        template: `${PUBLIC_PATH}/index.html`
      })
    );
  }

  return config;
};
