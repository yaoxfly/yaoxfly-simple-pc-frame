const isProduction = process.env.NODE_ENV === 'production' // 是否在正式环境
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const chunks = ['vendors', 'index']
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 输出文件名
            filename: 'index.html',
            chunks: chunks
        }
    },
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false
    },
    configureWebpack: config => {
        isProduction && config.plugins.push(
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })
        )
        const optimization = {
            splitChunks: {
                chunks: 'all',
                minSize: 20000, // 代码分割的最小值，默认30k；
                maxInitialRequests: Infinity, // 最大的初始化加载次数，默认为3；
                cacheGroups: { // 缓存组
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name (module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                            chunks.push(packageName)
                            return `${packageName.replace('@', '')}`
                        }
                    },
                    vendors: {
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -20
                    }
                }
            }
        }
        Object.assign(config, { optimization })
    },
    devServer: {
        open: false,
        disableHostCheck: true, // 防止 invalid host header
        compress: true,
        overlay: {
            // 出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            warnings: true,
            errors: true
        }
    }
}
