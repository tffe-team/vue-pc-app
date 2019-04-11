const path = require('path')
const proEnv = require('./build/prod.env')

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    assetsDir: proEnv.OUT_PATH,
    publicPath: process.env.NODE_ENV === 'production' ? `//static.xxx.com/tfstatic/${proEnv.PROJECT_NAME}` : '/',
    filenameHashing: true,
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: '时光金科pc模版',
            chunks: ['index']
        }
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        overlay: {
            warnings: true,
            errors: true
        },
        // proxy: {
        //     '/api': {
        //         target: "http://10.0.0.1:19000",
        //         ws: true,
        //         changeOrigin: true
        //     }
        // }
        before: app => {
            app.all(/api/, function(req, res) {
                const apiFile = path.join(__dirname, req.path + '.json')
                return res.sendFile(apiFile)
            });
        }
    }
}