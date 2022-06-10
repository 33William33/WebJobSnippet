const { merge } = require('webpack-merge')
const path = require('path')

const commonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '../public')
        }
    }
}

module.exports = merge(
    commonConfig,
    devConfig,
)