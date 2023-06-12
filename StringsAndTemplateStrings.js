const myName = "Hanan";
const passion = "javascript developer";
const yearCurrent = 2023;
// This is simple example of a string concatenation using +
const wholeLine = "I'm " + myName + " wanted to become a " + passion + "in " + yearCurrent;
console.log(wholeLine);
const nextLine = "This is my practice for moving \n\ the text to the another line of the console"
console.log(nextLine);
// Now using template strings use back ticks `` above tab 
const templateString = `I'm ${myName} wanted to become a ${passion} in ${yearCurrent}`;
console.log(templateString);
const changeLine = `This is practice for
changing the
line using
template strings`;
console.log(changeLine);