// Automatically Global Variable

function myFunction(){
    myCar = "Audi";
}

myFunction();
console.log(myCar);

var myCar1 = "AUDI";
console.log(window.myCar1);

// Hoisting Variable

var x = 5, y = 8;

console.log(x, y, z);

z = 11;

var x, y, z;

