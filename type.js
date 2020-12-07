// 类型判断
// 在ES6前，JavaScript有六种数据类型：Undefined、Null、Number、String、Boolean、Object
// 1. typeof  typeof是一元运算符，放在其单个操作数的前面，操作数可以是任意类型的            
console.log(typeof('tianxin')); // string
console.log(typeof 'tinaxin'); // string
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {name: 'tianxin'}); // object

function a() {};
console.log(typeof a); // function

// typeof对这些数据类型的值进行操作时，返回的结果不是一一对应的，1. 是小写的；2. Null和Object类型的值都返回的是object


// Object还分很多类型，如Array、Function、Date、RegExp、Error等。 用typeof检测都是返回object
// Object.prototype.toString
// es5规范：
// 当 toString 方法被调用的时候，下面的步骤会被执行：
// 如果 this 值是 undefined，就返回 [object Undefined]
// 如果 this 的值是 null，就返回 [object Null]
// 让 O 成为 ToObject(this) 的结果
// 让 class 成为 O 的内部属性 [[Class]] 的值
// 最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串

// 通过调用Object.prototype.toString会返回一个由"[object" 和 class 和 "]" 组成的字符串，而class是要判断的对象的内部属性。
console.log(Object.prototype.toString.call(undefined)); // [object Undnfiend]

let number = 1; // [object Number]
let string = '2'; // [object String]
let boolean = true; // [object Boolean]
let uud = undefined; // [object Undefined]
let nul = null; // [object Null]
let obj = {name: 'tianxin'}; // [object Object]
let array = [1, 2, 3]; // [object Array]
let date = new Date(); // [object Date]
let error = new Error(); // [object Error]
let reg = /a/g; // [object RegExp]
let func = function person() {}; // [object Functino]

function checkType() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(Object.prototype.toString.call(arguments[i]));
  }
}

checkType(number, string, boolean, uud, nul, obj, array, date, error, reg, func);

console.log(Object.prototype.toString.call(Math)); // [object Math]
console.log(Object.prototype.toString.call(JSON)); // [object JSON]
function a() {
  console.log(Object.prototype.toString.call(arguments)); // [object Arguments]
}
a();


// 写一个 type 函数能检测各种类型的值，如果是基本类型，就使用 typeof，引用类型就使用 toString。
// 此外鉴于 typeof 的结果是小写，我也希望所有的结果都是小写。 考虑到实际情况下并不会检测 Math 和 JSON，所以去掉这两个类型的检测

let class2type = {};
"Number String Boolean Null Undefined Object Array Function Date RegExp Error".split(' ').map((item) => {
  class2type[`[object ${item}]`] = item.toLowerCase();
});

function type(obj) {
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj;
}

console.log(type(number));
console.log(type(string));
console.log(type(array));
console.log(type(func));
console.log(type(null));
