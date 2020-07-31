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