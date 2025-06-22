const double = x => x + x;
console.log(double(2));

const add = (a, b) => a + b;
console.log(add(1, 2));

const printArguments = (...args) => {
    console.log(args);
}
printArguments(1, 2, 3);

setTimeout(() => {
    
    console.log('화살표 함수!')
}, 1000)