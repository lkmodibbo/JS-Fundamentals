
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n < 0) {
        return NaN;
    }
    return n * factorial(n - 1);
}

const argString = process.argv[2];
const x = Number(argString);

let result;

if (isNaN(x)) {
    result = 1;
} else {
    result = factorial(x)
}
console.log(result)
