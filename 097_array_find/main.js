const arr = [
    { name: 'a', age: 10 },
    { name: 'b', age: 20 },
    { name: 'c', age: 30 },
    { name: 'd', age: 50 },
    { name: 'e', age: 40 },

];

const r = arr.find(a => a.age === 30);
console.log(r);