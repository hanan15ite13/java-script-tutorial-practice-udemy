const day = 'wednesday';
switch (day) {
    case 'monday':
        console.log(`The current day is monday`);
        console.log(`This is the day you should start planning`);
        break;
    case 'tuesday':
        console.log(`the current day is tuesday`);
        console.log(`You should start coding`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log("this is were you have to use and operator")
        console.log(`Combination of wednesday and thursday`);
        break;

    case 'friday':
    case 'saturday':
        console.log(`You should not forget about the break statement`);
    default:
        console.log(`invalid day selected please go out`);
}
console.log("This is switch statement using if else block and logical opertors");
if (day === 'monday') {
    console.log(`The current day is monday`);
    console.log(`This is the day you should start planning`);
}
else if (day === 'tuesday') {
    console.log(`the current day is tuesday`);
    console.log(`You should start coding`);
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log("this is were you have to use and operator")
    console.log(`Combination of wednesday and thursday`);
}
else if (day === 'friday' || day === 'saturday') {
    console.log(`You should not forget about the break statement`);
}
else {
    console.log(`invalid day selected please go out`);
}