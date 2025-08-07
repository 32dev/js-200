const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    { id: 0, name: 'abcd', age: 22 },
    { id: 1, name: 'bcd', age: 42 },
    { id: 2, name: 'aaaa', age: 52 },
    { id: 3, name: 'cccc', age: 11 },
];

numArr1.sort(function (a, b) { return a - b; })
numArr1.sort(function (a, b) { return b - a; })
objArr.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});
console.log(numArr1)
console.log(numArr2)
console.log(objArr)