/** 
 * 1. 什么是流：所有互联网传输的数据都是以流的方式,一组有起点 有终点的数据传输方式
 * 2. 流的操作：
 *  a）流式读取文件：一节一节读取数据，每节64kb === 65536kb
 *  b）以流的方式读取
 *  c）写入流
*/
let fs = require('fs');
// let stream =  fs.createReadStream('./file1.txt');

// stream.on('data',(a)=>{
//     console.log('------------------------------------')
//     console.log(a.length);//每次1024kb
//     console.log(a)
// })

// //读取流的事件： 完成事件 end
// stream.on('end',()=>{
//     console.log('数据读完了')
// })

// //读取流的事件：error事件
// stream.on('error',(err)=>{
//     console.log('数据读出错',err)
//     throw err;
// })

/** 
 * 1）管道：nodejs中流的实现机制 可以直接定义一个输出流 导入输入流
 * 
 * 2）语法：输出流.pipe(输出流)
*/
//需求：实现大文件的复制
// let s1 =  fs.createReadStream('./file3.txt');
// let s2 =  fs.createWriteStream('./file6.txt');

// //流的方式实现大文件的复制
// s1.on('data',(a)=>{
//     s2.write(a)
// })

// s1.on('end',()=>{
//     s2.end();
//     // console.log(e)
// })

// //管道复制
// s1.pipe(s2);

/** 
 * 链式：将多个管道链接起来 实现链式处理
*/
// let fs = require('fs');
let zlib = require('zlib');

let s1  = fs.createReadStream('./file3.txt');
let s2  = fs.createWriteStream('./file3.txt.zip');

s1.pipe(zlib.createGzip()).pipe(s2);





