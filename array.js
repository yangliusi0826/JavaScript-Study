// 数组
// api application interface 应用程序接口
// 数组添加元素  push() -- 在数组末尾追加一个或多个元素，多个元素用逗号分开
//              unshift() -- 在数组的前面追加一个或多个元素，多个元素用逗号分开
//              两者都会改变原数组，函数返回值为改变后的数组的长度
// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.push(7, 8);
// console.log(arr);
// let num = arr.push(9); // 返回数组的长度
// console.log(num);


// 数组删除元素  pop() -- 删除数组末尾的元素
//              shift() -- 删除数组首元素
//              两者都会改变原数组，函数返回值为删除元素

// let result1 = arr.pop();
// console.log(arr, result1);

// let result2 = arr.shift();
// console.log(arr, result2);

// splice  会改变原数组，函数返回值为删除元素的数组
// let arr = [1, 2, 3, 4];
// 1. 删除元素 splice(startIndex, count) 从下标为startIndex的位置开始删除count个元素
// let result1 = arr.splice(2, 2);
// console.log(arr);  // [1, 2]
// console.log(result1); // [3, 4]

// 2. 添加元素 splice(startInde, count, addItem) 当count=0时表示要删除的元素为0个，则不删除元素，在下标为startIndex的位置开始添加元素addItem
// arr.splice(2, 0, 5);   // [1, 2, 5, 3, 4] 在下标为2的位置添加一个5
// arr.splice(2, 0, 5, 6); // [1, 2, 5, 6, 3, 4] 在下标为2的位置开始添加两个元素5，6
// console.log(arr);

// 3. 替换元素 splice(startInde, count, addItem) 当count不为0时表示从下标为startIndex的位置开始删除count个元素，并在下标为startIndex的位置添加元素addItem
// arr.splice(1, 2, 10);
// arr.splice(1, 2, 10, 11);
// console.log(arr);


// 截取数组  slice(startIndex, endIndex)  -- 截取从下标startIndex开始到下标为endIndex结束（不包含endIndex）构成的一个新数组
//          不会改变原数组，函数返回值为截取后的新数组
// let arr = [1, 2, 3, 4, 5];
// let result = arr.slice(1, 2);
// console.log(result);
// console.log(arr);

// 连接 将数组转为字符串 join(sym) -- 将数组以sym连接成字符串，不传时默认为逗号（“,”）
//                      不会改变原数组，函数返回值为连接后的字符串
// let arr = [1, 2, 3, 4];
// let result = arr.join();  // 1,2,3,4
// console.log(result);
// console.log(arr);

// 合并 concat()  -- 将数组合并为一个新数组
//      不会改变原数组，函数返回值为合并后的数组
// let arr = [1, 2, 3];
// let arr1 = [10, 20];
// let arr2 = [200, 300, 400];
// // let newArr = arr.concat(arr1); // [1, 2, 3, 10, 20]
// // let newArr = arr.concat(arr1, arr2); // [1, 2, 3, 10, 20, 200, 300, 400]
// console.log(newArr);

// 反转  reverse() -- 将数组的元素反转
//       会改变原数组，函数返回值为反转后的数组
// let arr = [1, 2, 3, 4];
// let reverseArr = arr.reverse(); // [4, 3, 2, 1]
// console.log(reverseArr); 
// console.log(arr);


// 排序 sort()
// forEach()
// map()  返回一个新数组，新数组时原数组的映射，新数组的元素值是每次函数的返回值
// let arr = [20, 30, 13, 48, 15];
// let brr = arr.map(item => {
//   return 1;
// })
// console.log(brr);

// filter() 过滤 由每次函数返回值为true对应的元素组成  返回一个新数组
// let arr = [20, 30, 13, 48, 15];
// let brr = arr.filter(item => {
//   return item > 20;
// })
// console.log(brr);


// some()  只要有一项满足条件则返回true
// 遍历数组，只要有一项return为true时循环结束，不再遍历之后的元素，没有满足条件的则函数返回值为false
// let arr = [20, 30, 13, 48, 15];
// let result = arr.some(item => {
//   return item > 20;
// });
// console.log(result);


// every() 每一项都要满足条件则返回true
// 遍历数组，只要有一项return为false时循环结束，不再遍历之后的元素，所有项都满足条件则函数返回值为true
// let arr = [20, 30, 13, 48, 15];
// let result = arr.every((item, index) => {
//   console.log(index)
//   return item >= 20;
// });
// console.log(result);

// indexOf()  判断某个值是否在数组中，存在就返回第一次出现的位置，不存在则返回-1。

// reduce() 收敛 返回值是最后一次函数调用的返回值
// 一开始 prev代表数组第一个元素，next指向数组第二个元素    1-----4
// 第二次 prev为上一次的返回值，next指向上一次next的下一个  2-----5
//                                                       2-----6
//                                                       2-----9
//                                                       2-----14
// reduce(fn(), arg) 有第二个参数时
// 一开始 prev代表第二个参数,指向数组的第一个元素
let arr = [1, 4, 5, 6, 9, 14];
let res = arr.reduce((prev, next) => {
  console.log(`${prev}-----${next}`)
  return 2;
})
console.log(res)

// 求和
let sum = arr.reduce((prev, next) => {
  return prev + next;
})