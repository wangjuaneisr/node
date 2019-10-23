/**
 * module模块对象
 * module.exports 真正暴露对象  exports　对象只是对它的引用
 */
require('./09-1')
 console.log(Array.prototype.slice.apply(arguments))
 /**
  * *module.paths 若配置了NOOD_PATH 会在此中查找
    *   默认查找模块的路径 如果当前路径下找不到node_modules 就去上一级查找 直到根目录
  */
 

//  Module {
//     id: '.',//路径
//     exports: {},//暴露对象
//     parent: null,//父级
//     filename: '/Users/wangjuan30/Desktop/zf/node/09-module.js',//文件名与路径
//     loaded: false,
//     children: [],
//     paths://默认查找模块的路径 如果当前路径下找不到node_modules 就去上一级查找 直到根目录
//      [ '/Users/wangjuan30/Desktop/zf/node/node_modules',
//        '/Users/wangjuan30/Desktop/zf/node_modules',
//        '/Users/wangjuan30/Desktop/node_modules',
//        '/Users/wangjuan30/node_modules',
//        '/Users/node_modules',
//        '/node_modules' ] },
