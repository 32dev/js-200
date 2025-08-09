const numRegExp = /[0-9]/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/
console.log(numRegExp.test(12345));
console.log(phoneRegExp.test('010-3003-0046'));
console.log(phoneRegExp.test('01-3003-0046'));