/*
    '문자열'.substring(시작인덱스,종료인덱스);
    - 시작인덱스부터 종료인덱스 직전까지의 문자열을 반환
    - 시작인덱스가 종료인덱스보다 크면 두 인덱스를 바꿔서 반환
    - 종료인덱스가 문자열의 길이보다 크면 문자열의 길이로 간주
    - 시작인덱스가 음수면 0으로 간주
*/

const sentence = 'This will be the end of Wakanda';
console.log(sentence.substring(13));
// Output: 'be the end of Wakanda'

console.log(sentence.substring(13, 20));
// Output: 'be the '

console.log(sentence.substring(0));
// Output: 'This will be the end of Wakanda'

console.log(sentence.substring(0, -20));
// Output: 'This will be the end of Wakanda'

console.log(sentence.substring(0, 50));
// Output: 'This will be the end of Wakanda'

console.log(sentence.substring(20, 13));
// Output: 'be the end of Wakanda'