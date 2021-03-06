// 原型
// 使用构造函数创建一个对象
// 构造函数
function Person() {

}

// let person = new person(); // new一个实例对象
// person.name = "Cindy";


// prototype是函数才会有的属性
// 函数的portotype属性指向了一个对象，这个对象是调用构造函数而创建的实例的原型，eg: person1和person2的原型。
// 什么是原型？每一个JavaScript对象（null除外）在创建的时候就会与之关联另一个对象，这个对象就是原型，每一个对象都会从原型继承属性。
Person.prototype.name = 'Cindy';
let person1 = new Person();
let person2 = new Person();
console.log(person1.name); // Cindy
console.log(person2.name); // Cindy



// 每一个JavaScript对象（null除外）都具有一个 __proto__ 的属性，这个属性会指向该对象的原型
console.log(person1.__proto__ === Person.prototype); // true
// ES5方法，获取对象的原型
console.log(Object.getPrototypeOf(person1) === Person.prototype); // true


// constructor 每个原型都有一个constructor属性指向关联的构造函数
console.log(Person.prototype.constructor === Person); // true


// 读取实例对象的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查找不到，就会去找原型的原型，一直找到最顶层为止
let person = new Person();

person.name = 'haha';
console.log(person.name); // haha

delete person.name;
console.log(person.__proto__.name)
console.log(person.name); // Cindy  读取person.name，从person对象中没有找到name属性，就从person的原型中找，person的原型为person.__proto__,也就是Person。prototype, Person.prototype.name = 'Cindy'
// person.name => person.__proto__.name => Person.prototype.name => Person.prototype.__proto__.name => Object.prototype.name

// 上面的例子中在原则中找到了属性，如果没有找到，则找原型的原型
// 原型也是一个对象，可以用最原始的方式创建它
let obj = new Object();
obj.name = 'cindy';
console.log(obj.name); // cindy

// 原型也是一个对象，对象的__porto__属性指向它的原型，函数的portotype属性指向一个原型
console.log(person.__proto__ === Person.prototype); // true 原型
console.log(Person.prototype.__proto__ === Object.prototype); // true 原型的原型
console.log(Object.prototype.constructor === Object); // true

// 原型的原型  Object.prototype的原型
console.log(Object.prototype.__proto__); // null 表示“没有对象”，即该处不应该有值，所以Object.prototype.__proto__的值为null跟Object.prototype没有原型是一个意思