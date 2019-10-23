/**
 * require函数
 * 作用：在当前模块中加载另外一个模块
 * 模块分类：
 *  1）自定义模块：自己写的 哈哈
 *  require('./filename.js')
 * 注意：
 *  a. 子模块没有暴露数据时 返回空对象
 *  b. 自定义模块必须加./ nodejs默认在node_modules目录下查找文件
 * 
 *  2）第三方模块：第三方程序员或公司开发的模块 先安装再使用 可以使用npm包管理工具
 *  npm install 第三方包
 * require(‘模块名’)
 * 
 *  3）系统模块 nodejs提供的功能模块 直接引入 无需安装
 * fs http url path 。。。
 * require('模块名')
 * 
 * 注意：
 *  a 当引入的模块语法错误时 报错
 *  b 当引入的模块路径错误时 报错 can not find module
 *  c require引入机制，当模块被多次引入时 只执行一次 ，将暴露的对象直接写入缓存，后面都在缓存里面读取
 */
// let obj = require('./07-1.js');
// console.log(obj)

//引入第三方模块
let jq = require('jquery');

//系统模块
// let fs = require('fs');
// console.log(fs)
// fs.readFile('./04.js',function(err,data){
//     console.log(data.toString())
// })

//require引入机制
// let obj = require('./07-1.js');//执行一次，将暴露的对象直接写入缓存
// let obj2 = require('./07-1.js');//在缓存里面读取
// let obj3 = require('./07-1.js');//在缓存里面读取
