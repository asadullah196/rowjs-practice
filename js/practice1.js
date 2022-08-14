function variableTest() {

    let numberOne = 55, numberTwo = 23;
    let sum = numberOne + numberTwo;

    var number = 7;
    {
        var number = 3;
        var number = "Asadullah";
    }

    var number = "23";

    const myCarChoise = ["Audi","Mercedes", "fFerrari", "BMW", "Majeda"];

    myCarChoise[0] = "Mercedes";
    myCarChoise[1] = "Audi Convertible";

    myCarChoise.push("Texi");

    let myNumber = 4;
    
    //document.getElementById("variableOne").innerHTML = "Var 1 = "  + numberOne;
    //document.getElementById("variableTwo").innerHTML = "Var 2 = "  + numberTwo;
    document.getElementById("Sum").innerHTML = myNumber ** 3;
}

function myFunctionTwo() {
    document.getElementById("demo1").innerHTML = "Hello From USA!";
}
