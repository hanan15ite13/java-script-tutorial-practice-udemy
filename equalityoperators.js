const laptopPrice = 25000;
const budget = 20000;
//lose equality operator
if (laptopPrice === budget) {
    console.log('The laptop is affordable (strict)');
}
//strict equality operator
else if (laptopPrice == 20000) {
    console.log(`The laptop is affordable (loose)`)
}
else {
    console.log(`out of budget`);
}
//taking input from user
let favouriteNumber;
favouriteNumber = Number(prompt(`Enter your favourite Number`))2323;
if (favouriteNumber === 23) {
    console.log("Great you can go ahead with this number");
    console.log(typeof favouriteNumber);
}
else if (favouriteNumber === 25) {
    console.log(`you are way ahead of my favourite number`);
    console.log(typeof favouriteNumber);

}
else {
    console.log(`please select a suitable number`);
    console.log(typeof favouriteNumber);
}