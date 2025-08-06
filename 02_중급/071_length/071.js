const arr = ['short', 'long sentence, it is not appropriate', '123456789ABCDEF', '12345'];

arr.forEach(str => {
    if (str.length < 10) console.log(str);
})