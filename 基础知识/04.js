/**
 * nodejs 的模块化
 * 1. 什么是模块
 * 在nodejs中所有的功能都是以模块的形式存在的，【每一个文件就是一个模块】
 * 所有的用户编写的代码都会自动封装在一个模块中
 * 
 * 2.自定义模块
 * 3.使用模块
 * 4.主模块 node 04 04就是主模块 一般叫main.js/app.js/index.js/pakeage.json的main声明 【一个项目只允许有一个主模块，对整个项目的其他模块进行统筹调度】
 * 5.nodejs的模块组成：所有用户编写的代码都在一个匿名函数中function (exports, require, module, __filename, __dirname) {}
 * exports 将模块中的数据暴露给引入的地方
 * require 引入模块的函数，并且将子模块暴露的数据赋值给变量
 * module 模块对象 包含当前模块的所有信息
 * __filename 当前模块的文件名
 * __dirname 当前模块所在的路径
 * 
 */
// console.log(arguments.callee.toString());
// [Arguments] {
//     '0': {},
//     '1':
//      { [Function: require]
//        resolve: { [Function: resolve] paths: [Function: paths] },
//        main:
//         Module {
//           id: '.',
//           exports: {},
//           parent: null,
//           filename: '/Users/wangjuan30/Desktop/zf/node/04.js',
//           loaded: false,
//           children: [],
//           paths: [Array] },
//        extensions:
//         [Object: null prototype] { '.js': [Function], '.json': [Function], '.node': [Function] },
//        cache:
//         [Object: null prototype] { '/Users/wangjuan30/Desktop/zf/node/04.js': [Module] } },
//     '2':
//      Module {
//        id: '.',
//        exports: {},
//        parent: null,
//        filename: '/Users/wangjuan30/Desktop/zf/node/04.js',
//        loaded: false,
//        children: [],
//        paths:
//         [ '/Users/wangjuan30/Desktop/zf/node/node_modules',
//           '/Users/wangjuan30/Desktop/zf/node_modules',
//           '/Users/wangjuan30/Desktop/node_modules',
//           '/Users/wangjuan30/node_modules',
//           '/Users/node_modules',
//           '/node_modules' ] },
//     '3': '/Users/wangjuan30/Desktop/zf/node/04.js',
//     '4': '/Users/wangjuan30/Desktop/zf/node' }
exports.name = 'wj'

console.log(arguments);

let obj = require('./04-1.js')
console.log(obj.show())
