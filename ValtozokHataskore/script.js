console.log("változók hatásköre");


let global = "Globális";
var superGlobal = "SzuperGlobális változó"; // bárhonnan el lehet érni


// Blokk szintű hatókör
{
    let blokk = "Blokk szintű változó";  // csak blokkban él
    var varBlokk = "Var-ral létrehozott változó egy blokkban";

    console.log(global);
    console.log(blokk);
}


console.log(varBlokk);  // mivel var-al hoztuk létre, a blokkon kívül is látszik
// console.log(blokk);  // mivel let-el hoztuk létre, a blokkon kívül nem látszik


// Függvény hatókör
function teszt(){
    let local = "Teszt";
    var valtozo = "TesztVar";

    console.log(global);
    console.log(local);
    console.log(valtozo);
}

teszt();

// console.log(local); // hiba, a függvényben létrehozott változók a függvényben maradnak
// console.log(valtozo); // hiba, a függvényben létrehozott változók a függvényben maradnak