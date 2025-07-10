const num1 = prompt("Please enter the first number");
const num2 = prompt("please enter the second number");

let finalNum1;
if (num1 === null || num1 === '') {
    finalNum1 = 'undefined'; 
} else {
    finalNum1 = num1; 
}

let finalNum2;
if (num2 === null || num2 === '') {
    finalNum2 = 'undefined';
} else {
    finalNum2 = num2; 
}

console.log(finalNum1 + ' is ' + finalNum2); 