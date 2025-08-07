const arr = [
    { id: 0, name: 'abcd', age: 22 },
    { id: 1, name: 'bcd', age: 42 },
    { id: 2, name: 'aaaa', age: 52 },
    { id: 3, name: 'cccc', age: 11 },
];

const r = arr.every(el => el.age > 10);
console.log(r);