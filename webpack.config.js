const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
  // Entry Point
  entry: {
    app: "./src/index.js",
  },

  // Output
  output: {
    path: path.join(__dirname, 'public'),
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
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
