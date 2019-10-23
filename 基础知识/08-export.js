/**
 * export 导出对象
 * 作用： 将模块中需要共享给其他模块的数据暴露（导出）到引用处
 * exports.属性名 = 值；
 * exports.方法名 = 函数；
 * 注意：
 *  a exports 是对module是module.exports的引用
 *  b exports不能修改指向，只能添加属性和方法，不能改指向
 *  c module.exports才是真正的暴露对象，既能添加属性和方法，又能改指向
 */
let obj = require('./07-1')
console.log(obj)//空对象
// obj();//不存在该函数
// obj.show();