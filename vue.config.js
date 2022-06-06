module.exports = {
    publicPath:'/',
    devServer:{
        port: 8080,
        host:'localhost',
        https:false,
        open:true
    },
    // configureWebpack: config => {
    //
    //     // if (process.env.NODE_ENV === 'production') {
    //     //     // 为生产环境修改配置...
    //     // } else if(process.env.NODE_ENV === 'development'){
    //     //     // 为开发环境修改配置...
    //     // }
    // }

    configureWebpack: config => {

    }
}
