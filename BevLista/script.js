console.log("Bevliszt");

let content = document.querySelector('#content');

let input = document.createElement('input');
input.type = "text"; 

content.appendChild(input);

let button = document.createElement('button');
button.textContent = "Hozzáad";

content.appendChild(button);


let list = document.createElement('ul');
content.appendChild(list);
