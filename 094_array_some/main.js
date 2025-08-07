const arr = [
    { id: 0, name: 'abcd', age: 22 },
    { id: 1, name: 'bcd', age: 42 },
    { id: 2, name: 'aaaa', age: 52 },
    { id: 3, name: 'cccc', age: 11 },
];

const abcd = arr.some(el => el.name == 'abcd');
const zzzz = arr.some(el => el.age > 100);
console.log(abcd);
console.log(zzzz);