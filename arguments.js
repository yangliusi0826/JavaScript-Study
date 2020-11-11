// arguments
// 定义一个函数 求任意数的和
// arguments 是一个对应于传递给函数的参数的类数组对象
function add() {
  let result = 0
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result
}

console.log(add(1, 2, 3, 4));  // arguments = [1, 2, 3, 4]



// 类数组对象：拥有一个length属性和若干索引属性的对象 
let array = ['name', 'age', 'sex'];
let arrayLike = {
  0: 'name',
  1: 'age',
  2: 'sex',
  length: 3
}

// 类数组对象无法直接调用数组的方法，可以用Function.call来间接调用
console.log(Array.prototype.join.call(arrayLike, '&')) // name&age&sex
console.log(Array.prototype.slice.call(arrayLike, 0)) // ["name", "age", "sex"]  可以做到类数组转数组
let newArr = Array.prototype.map.call(arrayLike, function(item) {
  return item.toUpperCase();
});
console.log(newArr); // ["NAME", "AGE", "SEX"]

// 类数组转数组的方法
// 1. slice
Array.prototype.slice.call(arrayLike, 0);
// 2. es6 Array.from()
console.log(Array.from(arrayLike));
// 3. apply
console.log(Array.prototype.concat.apply([], arrayLike))
// 4. splice
console.log(Array.prototype.splice.call(arrayLike, 0));

// 类数组的应用
// 1. Arguments对象就是一个类数组对象
// 2. Dom方法(document.getElementsByTagName()等)返回的也是类数组对象


// Arguments
// Arguments对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments指代该函数的Arguments对象。
function foo(name, age, sex) {
  console.log(arguments);
}

foo('name', 'age', 'sex');
// length属性，表示实参的长度
function fooLenth(a, b, c) {
  console.log("实参的长度为：" + arguments.length)
}
console.log("形参的长度为：" + foo.length); // 3
fooLenth(1); //arguments.length => 1
fooLenth(1, 2, 3, 4); // arguments.length => 4

// callee属性，通过它可以调用函数自身
// var data = [];

// for(var i = 0; i < 3; i++) {
//   data[i] = function () {
//     console.log(i);
//   }
// }
// data[0](); // 3
// data[1](); // 3
// data[2](); // 3
// 可以使用Arguments的callee属性解决上述问题
var data = [];

for(var i = 0; i < 3; i++) {
  (data[i] = function () {
    console.log(arguments.callee)
    console.log(arguments.callee.i);
  }).i = i
}
data[0](); // 1
data[1](); // 2
data[2](); // 3