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