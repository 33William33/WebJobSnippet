const path = require('path');

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js", // <--- Will be compiled to this single file
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}