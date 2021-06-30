const dotenv = require("dotenv");
const webpack = require("webpack");

const env = dotenv.config().parsed;

module.exports = {
  entry: {
    TransferPricing: "./src/pages/TransferPricing.js",
    FinStatements: "./src/pages/FinStatements.js",
    Lease: "./src/pages/Lease.js",
    KaminskiPawel: "./src/pages/KaminskiPawel.js",
    LandingPage: "./src/pages/LandingPage.js",
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 0,
  //   },
  // },
  output: {
    // filename: "[name].[chunkhash].bundle.js",
    filename: "[name].bundle.js",
    path: env.REACT_APP_BACKEND_STATIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
  ],
};
