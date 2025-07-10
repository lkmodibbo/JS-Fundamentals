const num1 = process.argv[2];
const myNumber = Number(num1);

if(isNaN(myNumber)){
    console.log("Not a number")
} else {
    console.log(`My number: ${myNumber}`);
}