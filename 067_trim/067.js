/*
 * 공백, 탭, 줄바꿈을 제거, 원본값에는 
 * 영향을 끼치지 않기 
 * 때문에 값을 별도로 저장해야 함 
 */

const sentences = [
    '    ABC abc',
    'ABC abc    ',
    `
        first second third
              forth
        sentence

    `
];

const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentence(sentences));
console.log("---▽ 원본");
console.log(sentences);