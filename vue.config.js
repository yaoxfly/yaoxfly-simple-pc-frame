const isProduction = process.env.NODE_ENV === 'production' // 是否在正式环境
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
  }
module.exports = {
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
        config.resolve.alias['@asset'] = resolve('src/assets')
        config.resolve.alias['@'] = resolve('src')
        config.resolve.alias._c = resolve('src/components')
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
    },
    transpileDependencies: ['eve-ui', 'element-ui']
}
