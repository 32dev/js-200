const str = 'Java asdfasdf';
const result = /java/ig.exec(str);
console.log(result);
console.log(result.index);
console.log(result.input);

const nums = "1, 2, 3,";

const regex = /\d+/g;

while (result2 = regex.exec(nums)) {
    console.log(result2, regex.lastIndex)
}