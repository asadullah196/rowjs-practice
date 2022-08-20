// JS Class

class myCar {
    constructor(name, year, owner, price){
        this.name = name;
        this.year = year;
        this.owner = owner;
        this.price = price;
    }
}

console.log(new myCar("AUDI", 2022, "Galib", 2.5 + "cr"));
//Arrow function

myFunction = () => {
    return "Asadullah Galib";
}

console.log(myFunction());

//This keyword

const myNameOne = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const myNameTwo = {
    firstName: "John",
    lastName: "Doe",
}

console.log(myNameOne.fullName.call(myNameTwo));