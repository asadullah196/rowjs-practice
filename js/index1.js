function add () {
    myNum = 0;
    return function() {
        myNum++;
    }
    
}

const plus = add();

plus ();
plus ();
plus ();
plus ();
console.log(myNum);