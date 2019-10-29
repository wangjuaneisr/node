
/** 
 *   使用代码删除某个文件夹，该文件夹不为空      
 *   1. 逐层递归函数实现
 *   2. 删除空文件夹
 *   3. 读取非空文件夹及文件列表
 *   4. 判断是否为文件，如果是就删除
 *   5.判断是否目录，如果是目录就调用自己
*/

// 删除一个非空目录
//读取目录的文件及文件夹列表
let fs = require('fs');

// 
function deldir(p){
     //目录非空
     let list = fs.readdirSync(p);

     //遍历文件列表
    for(var i in list){
         //拼接路径
         let path = p + '/' + list[i];
         let info = fs.statSync(path);
         if(info.isFile()){
              fs.unlinkSync(path);
         }else{
               //如果还是文件夹，继续删除下级的
               // deldir(list[i]);
               arguments.callee(path);
         }
    }
    fs.rmdirSync(p);//文件删除后 删除空文件夹
}
deldir('./data')
