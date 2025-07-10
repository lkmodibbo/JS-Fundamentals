const numString = process.argv[2];

const count = Number(numString);
if (isNaN(count)) {
    console.log("Missing number of occurences");
} else if (count <= 0){

}
else {
    for (let i = 0; i < count; i++) {
        console.log("C is fun")
    }
}