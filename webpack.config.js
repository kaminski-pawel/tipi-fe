const dotenv = require("dotenv");
const webpack = require("webpack");

const env = dotenv.config().parsed;

module.exports = {
  entry: {
    LandingPage: "./src/pages/LandingPage.js",
    FinancialData: "./src/pages/FinancialData.js",
    SoftwareHouse: "./src/pages/SoftwareHouse.js",
    IndustryAnalysis: "./src/pages/IndustryAnalysis.js",
    ContentMarketing: "./src/pages/ContentMarketing.js",
    KaminskiPawel: "./src/pages/KaminskiPawel.js",
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
  ],
};
