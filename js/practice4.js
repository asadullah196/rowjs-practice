// Try Catch test with self made error

let myInput = 12;

try {
    if (myInput == "") throw "empty";
    if (isNaN(myInput)) throw "not a number";
    myInput = Number(myInput);
    if (myInput < 5) throw "too low";
    if (myInput > 10) throw "too high";
}
catch (err) {
    console.log(err)
}

console.log("Made by galib");