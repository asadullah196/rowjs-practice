function myFunction() {
    console.log("Galib!");
}

// Store function into variable

var  x = function (a, b, c) {
    return a * b - c;
};

myFunction();
console.log(x(10,4,6));

/*
(function () {
    alert("Asad");
})();

*/

const person = {
    fullName: function () {
        return this.name1;
    }
};

const xy = {
    name1 : "Asad",
};

const y = {
    name1 : "Asadullah",
};

const name = person.fullName.call(y);
console.log(name);