Function.prototype.apply2 = function(context, arg) {
  context = Object(context) || window;
  context.fn = this;
  console.log('arg', arg)

  var result;
  if(!arg) {
    result = context.fn();
  } else {
    result = context.fn(...arg);
  }

  delete context.fn;

  return result;
}

Function.prototype.apply3 = function(context, arg) {
  context = Object(context) || window;
  context.fn = this;
  

  var result;
  if (!arg) {
    result = context.fn();
  } else {
    let args = [];
    for(let i = 0; i < arg.length; i++) {
      args.push(`arg[${i}]`);
    }

    var result = eval(`context.fn(${args})`);
  }
  
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

console.log(bar.apply(foo, ['cindy', 18]))

console.log(bar.apply2(foo))

console.log(bar.apply3(foo, ['cindy', 18]))