const path = require('path')


// library和libraryTarget要一起使用

module.exports = function(env){

    console.log("=============>")
    console.log(env)

    return {
        context: path.resolve(__dirname, '../'),
        entry: path.resolve(__dirname, '../src/app/'),
        output : {
            path: path.resolve(__dirname, "../dist/"),
            // filename:'[name].[id].[hash].min.js[query]',
            filename:'[name].min.js',
            library: {
                // 不同的模块化标准导出的名称不一样
                root: 'Lib',
                amd: "Lib-amd",
                commonjs: "Lib-common"
            },
            libraryTarget: 'umd',
            auxiliaryComment: {
                root: "ROOT Comment",
                commonjs: "CommonJS Comment",
                commonjs2: "CommonSJ2 Comment",
                amd: "AMD Comment"
            }
        },
        externals: {
            jquery: 'jQuery'
        }
    }

}