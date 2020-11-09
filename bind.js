Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    console.log(arguments)
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  }
}


var foo = {
  value: 1
};

function bar(name, age) {
  console.log('this.value', this.value);
  console.log('name', name);
  console.log('age', age);
}

// 返回了一个函数
// var bindFoo = bar.bind(foo, 'cindy'); 
// bindFoo(17)


// var bind2Foo = bar.bind2(foo, 'cindy');
// bind2Foo(19)

console.log('-----------------------------分割线-------------------------');

// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

Function.prototype.bind3 = function(context) {

  // 调用 bind 的不是函数时需要报错
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fBound = function() {
    
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }

  // 修改返回函数的prototype为绑定函数的prototype，实例就可以继承绑定函数的原型中的值
  // fBound.prototype = this.prototype;  修改fBound.prototype也会修改绑定函数的prototype，因此使用一个空函数来中转
  
  var fNOP = function() {};
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
}

var value = 2

var foo2 = {
  value: 1
}

function bar2(name, age) {
  this.habit = 'shopping';
  console.log('this.value', this.value);
  console.log('name', name);
  console.log('age', age);
}

bar2.prototype.friend = 'junjun';

var bindFoo2 = bar2.bind(foo2, 'cindy');
var obj = new bindFoo2('18');
console.log('============')
var bindFoo3 = bar2.bind3(foo2, 'cindy');
var obj3 = new bindFoo3('18');

var obj4 = bindFoo3('19')

