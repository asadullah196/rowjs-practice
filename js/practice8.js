// Practice Problem

const myName = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

const matches = myName.match(/lorem/gi);
console.log(matches);

const occurances = matches ? matches.length : 0;

console.log("lorem repeation = " + occurances);

const position = myName.search(/lorem/i);

console.log("lorem found at = " + position+1);

// JS practice started here
console.log("Asad");