/*** 
 * 同步和异步
 * 同步：上一步执行完 才能执行下一步
 * 异步：将比较复杂的任务以任务线程实现 不用等上一句执行完，下一句也能执行
*/

console.log('111')

setTimeout(function(){
    console.log('222')
},0)
// 在window下里面 最小时间间隔是15ms ios系统下最小是10ms 设置为0 其实也是15ms 
// 【异步的代码永远在同步代码后面执行】 同步代码：主线程 异步代码：任务线程

    console.time('t1');
    for(let i = 0 ; i< 99999 ; i++){
       
    }
    console.timeEnd('t1');

    console.log('333')