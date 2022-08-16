
// Map DS
const fruitsMap = new Map();

fruitsMap.set("Appel", 500);
fruitsMap.set("Bananas", 200);
fruitsMap.set("Oranges", 100);
fruitsMap.set("Khajoor", 600);

console.log(fruitsMap);

// Set DS
const mySet = new Set();

mySet.add("A");
mySet.add("B");
mySet.add("C");
mySet.add("AD");
mySet.add("a");

console.log(mySet);

// Day 02 ends here

let myName1 = "Asadullah Galib";

for(let x of myName1){
    console.log(x);
}

console.log("For IN done");

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
