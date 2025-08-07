const str = '12345678';
const distributeArr = Array.from(str);
console.log(distributeArr);
const modifiedArr = Array.from(distributeArr, v => v * 2)
console.log(modifiedArr);