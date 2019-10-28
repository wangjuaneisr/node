/** 
 * 异步的三种实现方式：
 * 1.回调函数：回调函数不一定是异步，异步一定是回调函数
 * 2.事件
 * 3.promise
*/

/** 
 * 1.回调函数
 * 
 * */
// console.log('11111')
// let arr = [1,2,3,4];
// arr.forEach((v,i)=>{
//     console.log(v)
// });
// console.log('22222')
/** 
 * 2.事件
 *  事件源.on('事件名称，回调函数)
 * */
// let http = require('http');
// let server = http.createServer();
// server.on('request',(req,res)=>{
//     res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
//     res.write('<h>您在访问nodejs服务器</h>');
// })
// server.listen(5000,()=>{
//     console.log('端口5000已启动...')
// })
/** 
 * promise 承诺对象
 * 1）什么是promise：promise是ES6中新增的对象
 * 2）promise的状态：
 *  Pedding 等待
 *  Resolved 成功
 *  Rejected 失败
 *  状态转化：
 *  Pedding=>Resolved
 *  Pedding=>Rejected
 * 3）promise的作用
 *  promise可用于异步传递消息
*/
let fs = require('fs');

fs.readFile('./file.txt',(err,data)=>{
    console.log(data.toString())
})

fs.readFile('./file2.txt',(err,data)=>{
    console.log(data.toString())
})