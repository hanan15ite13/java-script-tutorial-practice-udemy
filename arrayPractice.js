'use strict'
const friend1 = 'Hanan';
const friend2 = 'Adil';
const friend3 = 'Yasir';
const friend4 = 'Abrar';
//above example using an array
const friends = ['Hanan', 'Adil', 'Yasir', 'Abrar'];
console.log(friends);
//length of array
console.log(friends.length);
//another way of declearing an array
const months = new Array('January', 'Febuary', 'March', 'May', 'June');


console.log(months, months.length);
//replacing a value in array
months[months.length - 2] = 'July';
console.log(months);
const empName = 'Hanan'
const empDOB = 2020
const employee = [empName, 2050 - empDOB, 'single', friends];
console.log(employee, employee.length);
const numberAdd = [45, 22, 34, 26, 90, 100];
const addNumbers = function (num1, num2) {
    return num1 + num2;
}
console.log(`The addition of two numbers in an arary ${addNumbers(numberAdd[1], numberAdd[4])}`);
