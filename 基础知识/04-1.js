let str = 'node真好'
 //exports 暴露对象 将模块内部暴露到引用处
exports.str = str;
exports.show = function(){
    console.log('hello nodejs!')
}