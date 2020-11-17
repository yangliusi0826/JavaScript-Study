// 数组去重

// 双层循环 (兼容性好)
let array = [1, 1, '1', '1'];

function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let isExist = false;
    for(let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) result.push(array[i]);
  }

  return result;
}

console.log(unique(array));

// indexOf 简化内层循环
function unique2(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log("unique2 ----- ", unique2(array));


// 排序后去重  效率高于indexOf
function unique3(array) {
  if (!array ||array.length === 0) return [];

  let sortArr = array.concat().sort(); // 使用contact方法对原数组array进行浅拷贝，排序后不会应该原数组
  let last = sortArr[0];
  let result = [last];
  for (let i = 1, len = sortArr.length; i < len; i++) {
    if (sortArr[i] !== last) {
      result.push(sortArr[i]);
      last = sortArr[i];
    }
  }

  return result;
}

let array3 = [1, 2, '2', 1, '1', '1'];
console.log("unique3 ----- ", unique3(array3));


// unique api
function unique4(array, isSorted) {
  let last = array[0];
  let result = [last];
  for (let i = 1, len = array.length; i < len; i++) {
    if (isSorted) {
      if (last !== array[i]) {
        result.push(array[i]);
        last = array[i];
      }
    } else if (result.indexOf(array[i]) === -1) {
      result.push(array[i])
    }
  }

  return result;
}

let array4_1 = [1, 2, '2', 1, '1', '1'];
console.log("unique4 ----- ", unique4(array4_1, false));

let array4_2 = [1, 1, '1', '1', 2, '2'];
console.log("unique4 ----- ", unique4(array4_2, true));


// 优化
/**
 * 
 * @param {any[]} array  要去重的数组，必填
 * @param {boolean} isSorted 函数传入的数组是否已排序过，如果为true，将采用更快的方式去重
 * @param {Function} iteratee 传入一个函数，然后去每个元素进行计算，然后根据处理后的结果进行去重
 */
function unique5(array, isSorted, iteratee) {
  let result = [];
  let seen = [];

  for (let i = 0, len = array.length; i < len; i++) {
    let value = array[i];
    let computed = iteratee ? iteratee(value, i, array) : value;

    if (isSorted) {
      if (!i || seen !== computed) {
        result.push(value);
      }
      seen = computed;
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        result.push(value);
      }
    } else if (result.indexOf(value) === -1) {
      result.push(value);
    }
  }

  return result;
}

let array5 = [1, 1, 'a', 'A', 2, 2];
console.log(unique5(array5, false, function(item){
  return typeof item == 'string' ? item.toLowerCase() : item
})); // [1, "a", 2]

