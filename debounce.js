/**
 * 防抖原理：事件触发了在n秒后才会执行，
 *           如果在一个事件触发的n秒内又触发了这个事件，那就以新的事件的时间为准
 *           n秒后才执行。  
*/

let count = 1;
let containerDom = document.getElementById('container');

function getUserAction(e) {
  console.log(this);
  console.log('getUserAction', e);
  containerDom.innerHTML = count++;
}

// containerDom.onmousemove = getUserAction;
containerDom.onmousemove = function () {
  console.log(this);
  console.log('getUserAction', e);
  containerDom.innerHTML = count++;
}

// 第一版
// function debounce(func, wait) {
//   let timeout;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, wait);
//   }
// }

// containerDom.onmousemove = debounce(getUserAction, 1000);

/**
 *  在getUserAction函数中console.log(this),在不使用debounce函数的时候，this的值为<div id="container"></div>
 *  如果使用debounce函数，this就指向Window对象，需要将this指向正确的对象
*/ 
function debounce(func, wait) {
  let timeout;
  return function() {
    let context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context);
    }, wait);
  }
}

/**
 *  event对象
 *  JavaScript在事件处理函数中会提供事件对象event, getUserAction中打印event为MouseEvent对象，
 *  如果使用debounce函数，打印的event为undefined。
 */
// function debounce(func, wait) {
//   let timeout;
//   return function() {
//     let context = this;
//     let args = arguments;

//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       func.apply(context, args);
//     }, wait);
//   }
// }

containerDom.onmousemove = debounce(getUserAction, 1000);