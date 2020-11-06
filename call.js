Function.prototype.call2 = function(context) {
  var context = context || window;
  context.fn = this;

  var arg = [];
  for(let i = 1; i < arguments.length; i++) {
    arg.push(`arguments[${i}]`);
  }
  
  var result = eval('context.fn(' + arg +')');
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