function sum1(arr) {
  let sum = 0;
  for(let key in arr) {
    sum += arr[key];
  }
  
  return sum;
}

function sum2(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function sum3(arr) {
  let sum = 0;
  let index = 0;
  let len = arr.length;
  while(index < len) {
    sum += arr[index];
    index++;
  }
  
  return sum;
}

let arr = [];
for(let i = 1; i < 100000; i++) {
  arr.push(i);
}

console.log('-------------for in---------------')
console.time();
console.log(sum1(arr));
console.timeEnd();

console.log('-------------for---------------')
console.time();
console.log(sum2(arr));
console.timeEnd();

console.log('-------------while---------------')
console.time();
console.log(sum3(arr));
console.timeEnd();