let markMass;
let markHeight;
let johnMass;
let johnHeight;
let bodyMassIndexMark;
let bodyMassIndexjohn;
let markHigherBMI;
//working with data 1
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
bodyMassIndexMark = markMass / markHeight ** 2;
console.log(bodyMassIndexMark);
bodyMassIndexjohn = johnMass / johnHeight ** 2;
console.log(bodyMassIndexjohn);
console.log(markHigherBMI = bodyMassIndexMark > bodyMassIndexjohn);
console.log(typeof markHigherBMI);
if (bodyMassIndexMark > bodyMassIndexjohn) {
    console.log(`Body Mass index of mark is ${bodyMassIndexMark} and is higher than john`);
    console.log(`The body mass index of mark is (${bodyMassIndexMark}-${bodyMassIndexjohn}) higher than john`);
}
else {
    console.log(`Body Mass index of john is ${bodyMassIndexjohn} and is higher than mark`)
}
//working with the data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
bodyMassIndexMark = markMass / markHeight ** 2;
console.log(bodyMassIndexMark);
bodyMassIndexjohn = johnMass / johnHeight ** 2;
console.log(bodyMassIndexjohn);