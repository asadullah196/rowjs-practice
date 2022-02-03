
function backOrginal(){

    inputString = "This is a BIG and little      Tea Place!";

    document.getElementById('demo-1').innerHTML = inputString;
}

function backOrginal1(){
    textSanple = "I'm a little tea pot    asad a.";

    document.getElementById('demo-1').innerHTML = titleCase(textSanple);
}

//var x = document.getElementById("formInput");

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

