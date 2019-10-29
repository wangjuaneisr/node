/** 
 * 文件系统操作
 * 1.读取文件 由于nodejs是服务器端程序 必须要有读写文件操作 在客户端没有这样的功能
 *  文字读写的两种方式:
 *  1）直接读取
 *         
 *  2）流式读取
*/
// let fs = require('fs');
// console.log('11')
// //异步读取
// fs.readFile('./异步&promise/file.txt',(err,data)=>{
//     console.log('22',data.toString())
// })
// console.log('33')

// //同步读取 （等你）
// console.log('44')

// let res = fs.readFileSync('./异步&promise/file.txt');
// console.log('55',res);
// console.log('66')

// 删除一个非空目录
//读取目录的文件及文件夹列表
let fs = require('fs');
function deldir(p){

    if(!fs.existsSync(p))retrun;
   let list =  fs.readdirSync(p);

   list.forEach((v,i)=>{
       let fn = p + '/' +v;
       let stats = fs.statSync(fn);
       if(stats.isFile()){
            fs.unlinkSync(fn);
       }else{
            arguments.callee(fn);
       }
   })
     //删除空目录
       fs.rmdirSync(p);
}
deldir('./data')