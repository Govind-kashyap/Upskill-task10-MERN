
let principal = 100000; 
let rate = 15; 
let time = 3; 
let n = 1;

let amount = principal * Math.pow((1 + rate / 100 / n), n * time);

let compoundInterest = amount - principal;

console.log(`The compound interest after ${time} years is: ${compoundInterest.toFixed(0)}`);
console.log(`The total amount after ${time} years is: ${amount.toFixed(0)}`);
