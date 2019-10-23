console.log('07 output');

let userName = 'wj';
function show(){
    console.log(userName)
}

//暴露到调用处
// exports.show = show;

//exports不能修改指向，只能添加属性和方法
//直接暴露函数
//exports = show;
// module.exports与 exports指向同一个内存空间
//exports 是module.exports的引用
module.exports = show; //t推荐使用暴露对象 指向哪里（内存区域）就暴露哪里