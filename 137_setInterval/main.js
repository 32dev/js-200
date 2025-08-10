let count = 0;

const timer = setInterval(() => {
    console.log(`${count++}번쨰 함수가 실행됩니다.`);
}, 1000);

setTimeout(function(){
    clearInterval(timer);
},3000)