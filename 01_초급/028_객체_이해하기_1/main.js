var family = {
    address: "Busan",
    members: {},
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        }
    },
    getHeadcount: function () {
        console.log(this.members);
        return Object.keys(this.members).length;
    }
}
family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdanggi', 'dog');
console.log(family.getHeadcount());