const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") },
    output: {
        path: path.resolve(__dirname, "build")
      },
      // loaders
    module: {
        rules: [
            {
                test: /\.css$/, // /\.css$/, [SKIP: fnd how to combine]
                use: ["style-loader", "css-loader"]
              },
            {
            test: /\.scss$/, // /\.css$/, [SKIP: fnd how to combine]
            /*
            loading order matters (Right to Left), style loader is for 
            injecting CSS styles in page, if used later, actual css will 
            not load first.
            */
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
        ]
      },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "source", "index.html")
      })
    ],
    mode: "development",
    optimization: {
        splitChunks: { chunks: "all" }
    },
}