const str = 'To lose your path is the way to find that path';
const senstiveCaseRegex = /to/;
const ignoreAllRegex = /to/ig;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(senstiveCaseRegex));
console.log(str.match(ignoreAllRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));