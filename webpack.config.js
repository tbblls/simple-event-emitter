var path = require('path');
var webpack = require("webpack");
    module.exports = {
        entry: [
            './src/see'
            ],
        output: {
            path: __dirname,
            filename: './dist/see.js'
        },
        plugins:[
            new webpack.optimize.UglifyJsPlugin({
                compress:{
                    unused : false
                }
            })
        ]
    };