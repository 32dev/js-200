console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('It is Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

console.log("----------------------------");

console.log(Number.isNaN(-1));
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(new Date()));
console.log(Number.isNaN(new Date().toString));
console.log(Number.isNaN(Infinity));
