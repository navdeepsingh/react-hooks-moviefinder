const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  // Entry Point
  entry: {
    app: "./src/index.js",
  },

  // Output
  output: {
    filename: "build.js"
  },

  // How to resolve encountered imports
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]

}