const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");

const env = dotenv.config().parsed;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "init-bundle.js",
    path: env.REACT_APP_BACKEND_STATIC_DIR,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
  ],
};
