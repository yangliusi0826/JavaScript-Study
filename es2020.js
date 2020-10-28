// ES2020新功能 
// 【1】 BigInt  
// Javascript 中最大的整数是 pow(2, 53) \- 1，但是，BigInt 不受此限制
let oldNum = Number.MAX_SAFE_INTEGER;
console.log('oldNum', oldNum);
oldNum++;
console.log('oldNum', oldNum);
oldNum++;
console.log('oldNum', oldNum);
oldNum++;
console.log('oldNum', oldNum);

// 在数字后面添加一个 n，这个 n 说明这是一个 BigInt，Javascript 引擎应该特殊处理（不管是 V8，还是其它引擎）。
let newNum = 9007199254740992n;
console.log('newNum', newNum);
newNum++;
console.log('newNum', newNum);
newNum++;
console.log('newNum', newNum);
newNum++;
console.log('newNum', newNum);


// 【2】动态引入
// 允许把JS文件作为一个模块动态的引入到应用中，可以帮助处理按需加载的代码，拆分代码
// let test = async (isShow) => {
//   let result = 0;
//   if (isShow) {
//     const testModule = await import('test.js');
//     result = testModule.add(1, 2);
//   }

//   alert(result);
// }
// test(true);


// 【3】空值合并
// 空值合并可以真正的检查nullilsh值，而不是falsely值
// falsely的值：空字符串、数字0、undefined、null、false、NaN等。
// nullish的值：undefined 或者 null