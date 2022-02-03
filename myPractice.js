//var x = document.getElementById("formInput");

textSanple = "I'm a little tea pot    asad a";

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

document.getElementById('demo').innerHTML = titleCase(textSanple);