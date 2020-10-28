function shadowCopy(obj) {
  let newObj = {};
  for(let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

// let obj = {
//   name: 'tianxin',
//   age: 18,
//   address: {
//     city: '武汉市'
//   }
// }
// let newObj = shadowCopy(obj);
// newObj.age = 19;
// newObj.address.city = '长沙市'
// console.log('obj', obj)
// console.log('newObj', newObj)

console.log(shadowCopy(undefined))