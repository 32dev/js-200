const arr = [
    { name: 'a', age: 10 },
    { name: 'b', age: 20 },
    { name: 'c', age: 30 },
    { name: 'd', age: 50 },
    { name: 'e', age: 40 },

];

const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});

const arr3 = arr.map(el => el.name);
console.log(arr2);
console.log(arr3);