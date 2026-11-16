console.log("referencia");

let name = "Teszt Elek";

let age = 30;

let ember = {
    name: "Gipsz Jakab",
    age: 42
};

let ember2 = {
    name: "Gipsz Jakab",
    age: 42
};

ember === ember2 //false

let ember1 = ember;
let name1 = name;

console.log(ember);
console.log(ember1);

ember.age = 45;

console.log(ember);
console.log(ember1);

function getAge(p){
    p.valami = "ertek";
    return p.age;
}

function str(s){
    s = Number(s);
    console.log(s);
}

str(name);
getAge(ember);

console.log(name);
console.log(ember);
console.log(ember1);

ember === ember1 //true