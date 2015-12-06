var path = require('path');
var webpack = require("webpack");

var minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;

    module.exports = {
        entry: [
            './src/see'
            ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'see' + (minimize ? '.min.' : '.') + 'js'
        },
        plugins:[
            new webpack.optimize.UglifyJsPlugin({
                compress:{
                    unused : false
                }
            })
        ]
    };