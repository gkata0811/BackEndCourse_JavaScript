console.log("Üdvözöllek!");

let userName = prompt("Add meg a neved");

/*
let num = 125;

alert("Üdvözöllek kedves " + userName);
*/

let htmlSrting = "Üdvözöllek kedves <strong>" + userName + "</strong>!";

document.getElementById("content").innerHTML = htmlSrting;

/*
    - betöltés defer attribútum segítségével: az így létrehozott JS az oldal betöltésével egyidővel töltődik be,
    és csak azután fut le, miután a teljes oldal betöltődött

    - betöltés async attribútum segítségével: az így létrehozott JS az oldal betöltésével egyidővel töltődik be,
    viszont azonnal lefut, ahogy betöltődött
*/