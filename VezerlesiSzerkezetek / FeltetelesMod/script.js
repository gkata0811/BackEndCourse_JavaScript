console.log("if");

/*
    if (feltétel) {
        // Ez a kódblokk akkor fut le, ha a feltétel igaz
    } else {
        // Ez a kódblokk akkor fut le, ha a feltétel hamis
    }
*/

/*
    Olvassunk be egy életkort, és ha az életkor nagyobb mint 18, akkor egy alert ablakba írjuk ki, hogy nagykorú, ellenkező esetben pedig azt, hogy kiskorú
*/

let eletkor = Number(prompt("Add meg az életkorod:"));

if (eletkor >= 18) {
    alert("nagykorú");
} else {
    alert("kiskorú");
}


/*
    feltételes operátor
*/

// példa helytelen használata
eletkor >= 18 ? console.log("[Nagykorú]") : console.log("[Kiskorú]");

// példa helyes használatra

console.log(
    eletkor >= 18 ? "Nagykorú" : "Kiskorú"
);

let korhatarozo = eletkor >= 18 ? "Nagykorú" : "Kiskorú";
console.log(korhatarozo);