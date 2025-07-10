const NumberOfArguments = process.argv.length - 2;

if (NumberOfArguments === 0) {
    console.log("No argument");
} else if (NumberOfArguments === 1) {
    console.log("Argument found");
} else { 
    console.log("Arguments found"); 
}