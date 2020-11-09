Function.prototype.call2 = function(context) {
  context = Object(context) || window;
  context.fn = this;

  var arg = [];
  for(let i = 1; i < arguments.length; i++) {
    arg.push(`arguments[${i}]`);
  }
  
  var result = eval('context.fn(' + arg +')');
  delete context.fn;

  return result;
}

// 使用es6的展开运算符
Function.prototype.call3 = function(context) {
  context = Object(context) || window;
  context.fn = this;

  var arg = [];
  for(let i = 1; i < arguments.length; i++) {
    arg.push(arguments[i]);
  }

  var result = context.fn(...arg);
  delete context.fn;

  return result;
}

var foo = {
  value: 1
};

function bar(name, age) {
  // console.log(name)
  // console.log(age)
  // console.log(this.value);
  return {
    name,
    age,
    value: this.value
  }
}

console.log(bar.call2(foo, 'kevin', 18));

console.log(bar.call3(foo, 'kevin', 18));