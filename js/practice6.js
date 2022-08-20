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