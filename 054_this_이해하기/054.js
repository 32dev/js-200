this.valueA = 'a';
console.log(valueA);
valueB = 'b';
console.log(valueB);

function checkThis(){
    console.log(this);
}
function checkThis2(){
    "use strict";
    console.log(this);
}
checkThis();
checkThis2();
//...err