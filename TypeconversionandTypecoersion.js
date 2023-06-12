let phoneNumberPrivate = "7780964843";
console.log(phoneNumber);
//Before Typeconversion
console.log(phoneNumberPrivate + 30);
console.log(`After type conversion result`);
//After type conversion result
console.log(Number(phoneNumberPrivate) + 30);
//converting number to a string
let age = 45;
let result = age + 20
console.log(`The value of number before type conversion ${result}`);
result = String(age) + 20;
console.log(`The value of result after converting the number into string ${result}`);
//Guess the result
console.log(`The below are the examples of type coersion`);
let guessNumber = '4' + '25' - 100
//Result should be 325
console.log(guessNumber);
guessNumber = '45' * 100;
//Result should be 4500
console.log(guessNumber);
