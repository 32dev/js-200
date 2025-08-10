const s = new Set();

s.add('one');
s.add('two');
console.log('key 정보만 출력');
for (let key of s.keys()) {
    console.log(key);
}

console.log('value 정보만 출력');
for (let value of s.values()) {
    console.log(value);
}

console.log('[for..of, entries] 키, 값 정보를 동시에 출력');
for (let [key, value] of s.entries()){
    console.log(`key:${key}, value:${value}`);
}

console.log('[forEach] 키, 값 정보를 동시에 출력');
s.forEach((value, key)=>{
    console.log(`key:${key}, value:${value}`);
})