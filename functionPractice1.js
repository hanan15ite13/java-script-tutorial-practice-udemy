'use strict'
//function decelaration
function juiceMachine(apple, orange) {
    const juice = `The juice is the mixture of ${apple} apples and ${orange} oranges.`
    return juice;

}
const age1 = ageCalc1(2020);
const orangeJuice = juiceMachine(5);
console.log(orangeJuice);
const appleJuice = juiceMachine(5, 0);
console.log(appleJuice);
function ageCalc1(birthYear) {
    return 2050 - birthYear;
}

const ageCalc2 = function (birthYear) {
    return 2050 - birthYear;
}
//function expression
const age2 = ageCalc2(2020);
console.log(`The age using function decelarion ${age1}
The age using function expression ${age2}`);
// const factorial = function fact(n) {
//     n <= 1 ? 1 : n * fact(n - 1);
// }
// console.log(factorial(4));
//Arrow function 
const ageCalc3 = (birthYear) => 2025 - birthYear;
const age3 = ageCalc3(2020);
console.log(`The age using arrow function  is ${age3}`);

const retirementAgeCalc = (birthYear, employeeName) => {
    const age4 = 2025 - birthYear;
    //Return of template string 
    return `The retirement time due for ${employeeName} is ${65 - age4} years`
}
console.log(retirementAgeCalc(1990, "Hanan"));
console.log(retirementAgeCalc(2000, "Adil"))
//function calling other function



function eligibleForVote(age, votername) {
    const voting = checkAge(age);
    const nameInList = checkName(votername);
    console.log(voting);
    console.log(nameInList);
}
function checkAge(age) {
    if (age >= 18) {
        return `The voter with the age ${age} is elibile`;
    }
    else {
        return `The voter is short of ${18 - age} years to vote`;
    }
}
function checkName(votername) {
    if (votername === 'Hanan') {
        return `${votername} is eligible to vote `
    }
    else if (votername = 'Adil') {
        return `${votername} is eligible to vote `
    }
}
eligibleForVote(17, 'Hanan');
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `dolphins  win (${scoreDolphins} vs. ${scoreKoalas})`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`;
    }
}
console.log(checkWinner(scoreDolphins, scoreKoalas));





