// add path module to the webpack.config.js
const path = require("path");
// jQuery plugin
const webpack = require("webpack");


module.exports = { 
    entry: './assets/js/script.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      mode: 'development',
      plugins:[     // install npm i jQuery to use these plugins
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
      ],
};