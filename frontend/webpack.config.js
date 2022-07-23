// build a path module
const path = require("path");

//localhost:8080
module.exports = {
    // entry point?? 这个指令含义是什么
    devServer: {
        static: {
            directory: path.join(__dirname,'./src')
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080',
        //         pathRewrite: {'^/api': ''},
        //         changeOrigin: true,
        //         secure: false,
        //     },
        // },
        proxy: {
            '/api/': process.env.PROXY_API || 'http://localhost:8080/'
        },
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, `./src/index.js`),
    module: {
        rules: [
            {
                test: /\.js$/,
                use:"babel-loader"
            }
        ]
    },
    output: {
        filename: "bundle.js"
    }

}