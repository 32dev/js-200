Date.prototype.yyyymmdd = function () {
    const yyyy = this.getFullYear();
    const mm = (this.getMonth() + 1).toString().padStart(2, '0');
    const dd = this.getDate().toString().padStart(2, '0');
    return `${yyyy}${mm}${dd}`;
}

const date = new Date();
console.log(date.yyyymmdd()); // 예: 20250808
