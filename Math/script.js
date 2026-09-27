console.log("math");

/*
    Kerekítés:

        .floor(p) - minden esetben lefele kerekít
        .ceil(p) - minden esetben felfele kerekít
        .round(p) - középarányos kerekítés; .5 alatt lefele, .5 felett felfele
*/

console.log(
    `Math.floor(3.9) -> ${Math.floor(3.9)}`
)

console.log(
    `Math.ceil(3.1) -> ${Math.ceil(3.1)}`
)

console.log(
    `Math.round(4.49) -> ${Math.round(4.49)}`
)

console.log(
    `Math.round(4.5) -> ${Math.round(4.5)}`
)

function random(a, b){
    if (typeof a != "number" || typeof b !== "number")
        throw "Error 'random' function parameter type";

    return Math.floor(Math.random() * (b - a)) + a;
};

const rand = (a, b) => Math.floor(Math.random() * (b - a)) + a;