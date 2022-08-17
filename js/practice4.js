// Try Catch test with self made error

let myInput = "";

try {
    if(myInput == ""){
        throw "Empty";
    }
    if(isNaN(myInput)){
        throw "Not a number";
    }
    if(myInput < 5){
        throw "Too small";
    }
    if(myInput > 5){
        throw "Too big";
    }
}
catch(err){
    
}

console.log("Made by galib");