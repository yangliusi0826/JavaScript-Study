/**
 * 手写深拷贝，主要解决的问题：
 * 1. 属性是基本类型
 * 2. 属性是对象
 * 3. 属性是数组
 * 4. 循环引用的情况
 * 
 */

function deepCopy1(originObj, map = new WeakMap()) {
  // 判断是否为基本数据类型
  if (typeof originObj === 'object') {
    // 判断是都否为数组
    let newObj = Array.isArray(originObj) ? [] : {};
    
    // 判断是否为循环引用
    if (map.get(originObj)) {
      return map.get(originObj);
    }
    map.set(originObj, newObj);

    for (let prop in originObj) {
      console.log("prop", prop)
      if (originObj.hasOwnProperty(prop)) {
        newObj[prop] = deepCopy1(originObj[prop], map);
      }
    }
    return newObj;
  } else {
    return originObj;
  }
}

function deepCopy2(originObj, map = new WeakMap()) {
  // 判断是否为基本数据类型
  if (typeof originObj === 'object') {
    // 判断是都否为数组
    let newObj = Array.isArray(originObj) ? [] : {};
    
    // 判断是否为循环引用
    if (map.get(originObj)) {
      return map.get(originObj);
    }
    map.set(originObj, newObj);

    //for in => while
    let keysArr = Object.keys(originObj); 
    console.log(keysArr)
    const len = keysArr.length;
    let i = -1;
    while(++i < len) {
      console.log('keysArr[i]', keysArr[i])
      newObj[keysArr[i]] = deepCopy2(originObj[keysArr[i]], map);
    }

    return newObj;
  } else {
    return originObj;
  }
}

function deepCopy3(originObj, map = new WeakMap()) {
  // 判断是否为基本数据类型
  if (typeof originObj === 'object') {
    // 判断是都否为数组
    const isArray = Array.isArray(originObj);
    let newObj = isArray ? [] : {};
    
    // 判断是否为循环引用
    if (map.get(originObj)) {
      return map.get(originObj);
    }
    map.set(originObj, newObj);

    //for in => while
    const keys = isArray ? undefined : Object.keys(originObj);
    forEach(keys || originObj, (value, key) => {
        if (keys) {
            key = value;
        }
        newObj[key] = deepCopy3(originObj[key], map);
    });

    return newObj;
  } else {
    return originObj;
  }
}

function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
      iteratee(array[index], index);
  }
  return array;
}

// 1. 属性是基本类型
// let obj = {
//   name: 'tianxin',
//   age: 18
// }

// 2. 属性是对象

// let obj = {
//   name: 'tianxin',
//   age: 18,
//   address: {
//     city: '长沙市'
//   }
// }
// let newObj = deepCopy(obj);
// newObj.name = 'change';
// newObj.address.city = '修改'
// console.log(newObj)
// console.log(obj)


// 3. 属性是数组
// let obj = [1, 2, 'a', {name: 'c'}]
// let newObj = deepCopy(obj);
// newObj[1] = 3;
// newObj[3].name = 'xx';
// console.log(newObj);
// console.log(obj);


// 4. 循环引用的情况
let obj = {name: 'tianxin', age: 18, address: {province: '长沙市', child: {city: 'xxx'}}};
obj.p = obj;
console.log(obj)

console.time();
console.log(deepCopy1(obj))
console.timeEnd();

console.time();
console.log(deepCopy2(obj))
console.timeEnd();

console.time();
console.log(deepCopy3(obj))
console.timeEnd();