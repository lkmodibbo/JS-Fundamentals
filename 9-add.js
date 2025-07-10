
function add(a, b) {
    return a + b;
}
const firstArgString = process.argv[2];
const secondArgString = process.argv[3];

const num1 = parseInt(firstArgString);
const num2 = parseInt(secondArgString);

const sumResult = add(num1, num2)
console.log(sumResult)