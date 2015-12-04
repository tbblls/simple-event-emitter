var path = require('path');
    module.exports = {
        entry: [
            'babel-polyfill',
            './src/see'
            ],
        output: {
            path: __dirname,
            filename: './dist/see.js'
        },
        module: {
            loaders: [
                {
                loader: "babel-loader",
            
                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src"),
                ],
            
                // Only run `.js` and `.jsx` files through Babel
                test: /\.js?$/,
            
                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
                },
            ]
       }
    };