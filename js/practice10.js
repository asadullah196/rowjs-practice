// Test message printing
console.log("JS Object started here");

//Object printing

const person = {
    name: "Asadullah Galib",
    age: 26,
    home: "Mirpur",
    getName: function() {
        return this.name + " CIP";
    }
}
console.log(person.getName());



const person2 = person;