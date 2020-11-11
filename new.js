// 访问到 Otaku 构造函数里的属性
// 访问到 Otaku.prototype 中的属性

// function objectFactory() {
//   var obj = Object.create(null);

//   var Constructor = [].shift.call(arguments);
  

//   obj.__proto__ = Constructor.prototype;
//   Constructor.apply(obj, arguments);

//   console.log("obj", obj)
//   console.log("Constructor", Constructor);
//   console.log("arguments", arguments)

//   return obj
// }



// function Otaku (name, age) {
//   this.name = name;
//   this.age = age;

//   this.habit = 'Games';
// }

// Otaku.prototype.strength = 60;

// Otaku.prototype.sayYourName = function () {
//   console.log('I am ' + this.name);
// }

// var person = new Otaku('Kevin', '18');

// Otaku.prototype.test = 'test';

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60

// person.sayYourName(); // I am Kevin


// var p = objectFactory(Otaku, 'Kevin', '18');


function objectFactory() {
  var obj = Object.create(null);
  var Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype; // 指向正确的原型
  var result = Constructor.apply(obj, arguments); // 借用外部传入的构造器给obj设置属性
  console.log("result", result)

  return typeof result === 'object' ? result || obj : obj; // 确保构造器总是返回一个对象
}

function Otaku (name, age) {
  this.strength = 60;
  this.age = age;

  return {
      name: name,
      habit: 'Games'
  }
}

function Otaku2 (name, age) {
  this.strength = 60;
  this.age = age;

  return 'Otaku2'
}

function Otaku3 (name, age) {
  this.strength = 60;
  this.age = age;

  return null
}

var person = new Otaku('Kevin', '18');
var p = objectFactory(Otaku, 'Kevin', '18')


var person2 = new Otaku2('Kevin', '18');
var p2 = objectFactory(Otaku2, 'Kevin', '18')

var person3 = new Otaku3('Kevin', '18');
var p3 = objectFactory(Otaku3, 'Kevin', '18')