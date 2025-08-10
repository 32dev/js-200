const map = new Map();

for (let num of [1, 2, 3, 4, 5]) {
    map.set((v) => v * 2, num);
}
console.log(map);

for (let [func, value] of map) {
    console.log(func(value));
}