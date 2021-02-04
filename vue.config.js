const isProduction = process.env.NODE_ENV === 'production' // 是否在正式环境
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    productionSourceMap: false, // 生产环境是否生成 source map
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 采用独立样式文件载入，不采用<style>方式内联至html文件中
        extract: false,
        // 是否在构建css样式映射，false将提高构建速度
        sourceMap: false
    },

    configureWebpack: config => {
        // gzip配置
        isProduction &&
            config.plugins.push(
                new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8,
                    cache: true
                })
            )
    },

    devServer: {
        open: true, // 浏览器中打开
        disableHostCheck: true, // 防止 invalid host header
        compress: false, // 开启压缩
        overlay: {
            // 出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            warnings: true,
            errors: true
        }
    }
}
