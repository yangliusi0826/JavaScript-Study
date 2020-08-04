// 字符串
// 字符串直接量
let str = "Hello World";
console.log(typeof str); // string

// new
let str2 = new String('hi');
console.log(typeof str2); //object

// charAt(index) 返回字符串中index位置上的字符
let ch = str.charAt(0);  // H

// charCodeAt(index) 返回字符串中index位置上字符的Unicode编码
let num = str.charCodeAt(1); // 101  a - 97; A - 65; 0 - 48

// fromCharCode(num) 返回Unicode编码的num对应的字符
let ch2 = String.fromCharCode(65);  // A

// indexOf(ch) 从前往后找，字符ch在字符串中第一次出现的位置的下标
console.log(str.indexOf('l'));  // 2

// lastIndexOf(ch) 从后往前找，字符ch在字符串中第一次出现的位置的下标
console.log(str.lastIndexOf('l'));  // 9

let str3 = "How are you?";
// substr(startIndex) 截取从位置startIndex开始到最后的字符串
let res1 = str3.substr(2); // w are you?
// substr(startIndex, len) 截取从位置startIndex开始,长度为len的字符串
let res2 = str3.substr(2, 3); // w a

// substring(startIndex) 截取从位置startIndex开始到最后的字符串
let res3 = str3.substring(2); // w are you?
// substring(startIndex, endIndex) 截取从位置startIndex开始到位置endIndex结束（不包含endIndex）的字符串
let res4 = str3.substring(2, 3); // w
console.log(res3);
console.log(res4);

// split(str)  字符串转数组 将字符串已str分隔成多个部分，组成数组。
let str4 = "abc?123";
let arr = str4.split("?"); // ["abc", "123"]

// replace(oldstr, newstr) 替换,不改变原字符串
let str5 = "a-b-c-d";
let res5 = str5.replace("-", ""); // 只替换第一个
console.log(res5); // ab-c-d
let res6 = str5.replace(/-/g, ""); // 全部替换
console.log(res6); // abcd

