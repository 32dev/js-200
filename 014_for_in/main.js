var store = {
    snack: 1000,
    flower: 5000,
    beverage: 2000
};
for (var item in store) {
    console.log(`${item} : ${store[item]}`);
}