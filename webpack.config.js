const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  // Entry Point
  entry: {
    app: "./src/index.js",
  },

  // Output
  output: {
    filename: "build.js",
  },

  // How to resolve encountered imports
  module: {
    rules: [
      //JS|JSX LOADER
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      //HTML LOADER
      {
        test: /\.html$/,
        use: "html-loader",
      },
      //CSS LOADER
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
