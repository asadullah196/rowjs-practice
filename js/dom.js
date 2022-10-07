function validateForm(){
    const form = document.forms['myForm'];
    const value = form['fname'].value;

    //console.log(value);

    if(value === "") {
        alert("Emty Form!");
        return false;
    }
    return false;
}