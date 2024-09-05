const {merge} = require('webpack-merge');
// 加载不同环境配置
const BASE = require('./webpack.base.config');
const DEV = require('./webpack.dev.config');
const PROD = require('./webpack.prod.config');

module.exports = (env, args) => {
    // 确保 mode 参数有效
    const mode = args.mode || 'development';

    // 根据 mode 选择相应的配置
    let config;
    switch (mode) {
        case 'production':
            config = PROD;
            break;
        case 'development':
            config = DEV;
            break;
        default:
            throw new Error(`Unknown mode: ${mode}`);
    }

    // 合并基础配置与环境配置
    return merge(BASE, config);
};
