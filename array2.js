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