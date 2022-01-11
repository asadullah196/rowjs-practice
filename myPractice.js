function bodyChange() {
    document.getElementById('Paragraph-1').innerHTML = 'By by XpeedStudio!';
}

function bodyChangeC() {
    document.getElementById('Paragraph-1').innerHTML = '15 ' + 20;
}

function bodyChangeA() {
    document.getElementById('demo-body1').innerHTML = '15 Old ' + 20;
    document.getElementById('demo-body2').innerHTML = '15 New ' + 20;
}

function bodyChangeB() {
    document.getElementById('demo-body1').innerHTML = 'Reseted';
    document.getElementById('demo-body2').innerHTML = '<h1>Reseted</h1>';
}

function prices(){
    let x = 5;
    x = x + 5;
    document.getElementById('price').innerHTML = 'Reset = ' + x;
}
