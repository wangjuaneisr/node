/** 
 * 缓存区
 *  1.什么是缓存区: 在内存里面开辟一个临时区域 用于存在需要运算的字节码
 * 
 * 
 * 
*/
// let fs = require('fs');
// fs.readFile('./异步&promise/file.txt',(req,res)=>{
//     console.log(res)
// })

/** 2.创建缓存区
 *  1） 创建制定长度的缓存区 let buf = new Buffer(10)
 *  2)  按指定的数组（编码）创建缓存区 let buf = new Buffer([十进制编码]);
 *  3)  按指定字符创建缓存区 let buf = new Buffer(‘字符串’);
 */

// let buf = new Buffer(10);
// buf.write('张三')
// console.log(typeof Buffer)

// let buf = new Buffer([15056031,89,70,60,12]);
// buf.write('张三')
// console.log(buf.toString())

/** 3.写入 & 读取缓存区 & 复制缓存区
 *  1） buf.write
 *  2)  buf.toString()
 *  3)  buf.copy(buf2)
 */