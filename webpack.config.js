var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: [
        APP_DIR + '/index.js'
    ],
    output: {
        path: BUILD_DIR, filename: 'bundle.js'
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, include: APP_DIR, loaders: [ 'babel']
        }]
    }
};

module.exports = config;