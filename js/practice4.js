// Try Catch test with self made error

let myInput = 12;

try {
    if(myInput == "") throw "Empty";
    if(isNaN(myInput)) throw "Not a number";
    myInput = Number(myInput);

    if(myInput < 5) throw "Too small";
    if(myInput > 5) throw 
    {
        name: "Too big",
        village: "Dhaka",
    }

}
catch(err){
    console.log(err);
}

console.log("Made by galib");