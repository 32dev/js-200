const counter1 = {
    count: 0,
    addAfter1Sec() {
        const me = this;
        setTimeout(function () {
            me.count += 1;
            console.log(me.count);

        }, 2000)
    }
}
counter1.addAfter1Sec();