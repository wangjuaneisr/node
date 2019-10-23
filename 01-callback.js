/** 
 * 1）回调函数：将a函数作为参数传入b函数，b函数在执行过程中，根据时机或条件是否调用a函数，a就是回调函数
 * 
 * 2）机制
 * 将回调函数的【函数引用地址】作为参数传递给调用者
 * 当特定的事件或条件满足时 调用者使用函数指针对回调函数的事件进行处理
 * 
 * 3）用途：
 *  a 注册事件 ,如addEventLisen
*/
function show(){
    console.log('hao hai ou ~')
}
setInterval(show,1000);