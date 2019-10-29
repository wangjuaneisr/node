let fs = require('fs');

//将异步的数据交给p1进行处理
let p1 = new Promise((resolve,reject)=>{//resolve /reject都是函数
    fs.readFile('./file.txt',(err,data)=>{
        if(err)reject('数据读取失败');
        resolve(data.toString());
    })
})


let p2 = new Promise((resolve,reject)=>{//resolve /reject都是函数
    fs.readFile('./file2.txt',(err,data)=>{
        if(err)reject('数据读取失败2');
        resolve(data.toString());
    })
})
//调用p1对象 统一展示异步的数据
// p1.then((resolve)=>{
//     console.log("resolve",resolve)
// },(reject)=>{
//     console.log("reject",reject)
// })

//利用Promise对象的all方法可以手动实现手动调整输出的顺序 相当于异步变成了同步
Promise.all([p2,p1]).then((datas)=>{
    console.log(datas)
})
