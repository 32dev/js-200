Date.daysDiff = (dt1, dt2) => {
    let diff = dt2.getTime() - dt1.getTime();
    const s = Math.floor((diff = diff / 1000) % 60);
    const m = Math.floor((diff = diff / 60) % 60);
    const h = Math.floor((diff = diff / 60) % 24);
    const d = Math.floor(diff = diff / 24);
    return `${d}days, ${h} hours, ${m} minutes, and ${s} seconds`;
}
var from = new Date(2000, 0, 1);
var to = new Date();
console.log(Date.daysDiff(from, to));