var webpack = require('webpack');
var path = require('path');

// Path where the bundle file and other webpack output should be placed
var BUILD_DIR = path.join(__dirname, 'dist');

// Path where the source code will be found
var APP_DIR = path.join(__dirname, 'src');

var config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                // include all js and jsx files excluding the node modules
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}

module.exports = config;
