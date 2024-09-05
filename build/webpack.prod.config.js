const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    devtool: 'hidden-source-map',
    plugins: [
        new CleanWebpackPlugin(),
    ],
}
