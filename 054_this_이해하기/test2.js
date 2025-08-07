const normalFunc = function () {
    console.log(this);
};
const boundFunc = normalFunc.bind({ d: 2 });
boundFunc();