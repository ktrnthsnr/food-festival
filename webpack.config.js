// add path module to the webpack.config.js
const path = require("path");
// jQuery plugin
const webpack = require("webpack");
// add the webpack-bundle-analyzer
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = { 
    // entry: './assets/js/script.js', 
    // -- Updated to entry point splitting after modularization, 
      // -- after splitting the script.js code based on concern
    entry: {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js"
    },

    // output: {
    //     filename: 'main.bundle.js'
    //     path: path.resolve(__dirname, 'dist'),
    //   },

    // output: {
    //   filename: "[name].bundle.js",
    //   path: __dirname + "/dist",
    // },

    output: {
      filename: "[name].bundle.js",
      path: __dirname + "/dist"
    },
    module: {
      rules: [
        {
          test: /\.jpg$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name(file) {
                  return '[path][name].[ext]';
                },
                publicPath: function(url) {
                  return url.replace('../', '/assets/');
                }
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },
      mode: 'development', 
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jquery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static" // the report outputs to an HTML file in the dist folder
        })
      ], 
};