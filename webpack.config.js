// add path module to the webpack.config.js
const path = require("path");
// jQuery plugin
const webpack = require("webpack");
// add the webpack-bundle-analyzer
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = { 
    entry: './assets/js/script.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      mode: 'development',
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static" // the report outputs to an HTML file in the dist folder
        })
      ], 
};