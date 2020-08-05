// Math

// 圆周率
console.log(Math.PI);

// 绝对值
console.log(Math.abs(-12)); // 12

// floor(x) 向下取整 返回小于x的最大整数
console.log(Math.floor(12.4)); // 12
console.log(Math.floor(-12.4)); // -13

// ceil(x) 向上取整 返回大于x的最小整数
console.log(Math.ceil(12.4)); // 13
console.log(Math.ceil(-12.4)); // -12

// max()  最大值
console.log(Math.max(2, 4, 3, 8, 23, 9)); // 23

// min()  最小值
console.log(Math.min(2, 4, 3, 8, 23, 9)); // 2

// round() 四舍五入
console.log(Math.round(14.553)); // 15
console.log(Math.round(-14.553)); // -15

// random() 随机数 [0, 1)
console.log(Math.random());
// [0, 10)之间的随机数
console.log(Math.random() * 10);
// [5, 10)之间的随机数
console.log((Math.random() + 5) * 5);
// min-max
// (Math.random()*(max-min))+min