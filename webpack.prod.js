const path = require('path');

module.exports = {
    entry: './lib/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'lib'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js'
    }
};
