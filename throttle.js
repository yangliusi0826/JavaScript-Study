/**
 *  节流原理：事件触发后一段时间内，再次触发事件，则无视该次触发，直到事件执行完成后才能重新触发。
 *  有两种实现方式：1. 使用时间戳；2. 设置定时器
 */
let count = 1;
let containerDom = document.getElementById('container');

function getUserAction(e) {
  console.log(this);
  console.log('getUserAction', e);
  containerDom.innerHTML = count++;
}

//  
/**
 * 1. 使用时间戳
 * 当事件触发的时候，取出当前时间戳，然后减去之前的时间戳（最开始为0），
 * 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前时间戳。
 * 如果小于，就不执行。
 */

// function throttle(func, wait) {
//   let context, args;
//   let previous = 0;

//   return function() {
//     let now = +new Date();
//     context = this;
//     args = arguments;
    
//     if (now - previous > wait) {
//       func.apply(this, args);
//       previous = +new Date();
//     }
//   }
// }

/**
 * 2. 设置定时器
 * 在触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器。
 */

//  function throttle(func, wait) {
//    let timeout, context, args;
   
//    return function() {
//      context = this;
//      args = arguments;
//      if (!timeout) {
//       timeout = setTimeout(function() {
//         timeout = null;
//         func.apply(context, args);
//       }, wait)
//      }
//    }
//  }

//  上两种方法的比较
// 1. 第一种事件会立即执行，第二种事件会在n秒后第一次执行。
// 2. 第一种停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件。

// 结合两者 鼠标移入能立刻执行，停止触发的时候还能再执行一次
function throttle(func, wait) {
  let context, args, timeout;
  let previous = 0;

  let later = function() {
    previous = +new Date();
    timeout = null;
    func.apply(context, args);
  }

  let throttle = function() {
    let now = +new Date();
    context = this;
    args = arguments;
    let remianing = wait - (now - previous);

    if (remianing < 0 || remianing > wait) {
      if (!timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remianing);
    }
  }

  return throttle;
}


containerDom.onmousemove = throttle(getUserAction, 5000);


// +new Date() 利用隐式类型转换将时间对象转换为时间戳
// +'1' // 1 (转数字)
// 1 + '' // '1' (转字符串)
// !!1 // true (转布尔值)