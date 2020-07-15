module.exports = {
    runtimeCompiler: true,
    publicPath: './', //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项

    outputDir: 'dist', //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false, //是否使用https协议
        hotOnly: true, //是否开启热更新
        proxy: {
            '/api': {
                target: 'https://music.163.com/api/', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
                // 突破host和origin的限制
                headers: {
                    referer: 'http://music.163.com',
                    origin: 'http://music.163.com',
                    host: 'music.163.com'
                }
            },
        },
    },



}