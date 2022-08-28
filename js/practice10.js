// For in loop test

const myName = {
    fname: "Asad",
    mname: "Ullah",
    lname: "Galib",
    age:26,
    home: "pabna",
    year: 1996,
}

for(let x in myName){
    console.log(x);
}

// Test message printing
console.log("JS Object started here");

//Object printing

const person = {
    Name: "Asadullah Galib",
    Age: 26,
    Home: "Mirpur",
    getName: function() {
        return this.name + " CIP";
    }
}
console.log(person.getName());

person.Country = "Dhaka";

console.log(person);

const person2 = person;