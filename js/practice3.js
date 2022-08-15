const cars = ["A", "B", "C", "D", "E", "F", "G"];

for(let i = 0; i<cars.length; i++){
    console.log(cars[i]);
}

console.log("I am done!");

const myName = {
    fname: "Asad",
    lname: "Galib",
    age: 25,
    set: "Dhaka",
    year: 20.53,
}

for( let x in myName){
    console.log(myName[x]);
}