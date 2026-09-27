console.log("function");

/*
    - Programba írt program, amit akárhányszor meg lehet hívni.

    - Bemenő adatokból kimenő adatokat csinál.
    - A függvény újrahasznosítható.

    function fuggvenyNeve (parameter1, parameter2, ... patameterN) {
        // függvénytörzs - a függvény utasításia

        return visszateresiErtek; // ez az utasítás a függvény végét jelenti
    }
*/

function osszead(szam1, szam2){
    
    let osszeg;
    
    if (typeof szam1 === "number" && typeof szam2 === "number"){
        
        osszeg = szam1 + szam2;
        return osszeg;
    } else {
        osszeg = "Valamelyik nem szám.";
        return osszeg;
    }
}

function osszead1(szam1, szam2){
    if (typeof szam1 === "number" && typeof szam2 === "number")
        return szam1 + szam2;

    return ("Hiba!");
}

let ossz = osszead(2,3)

console.log(ossz);

const osszead2 = function(szam1, szam2){
    return szam1 + szam2;
}

const osszead3 = (szam1, szam2) => {
    return szam1 + szam2;
}

const osszead4 = (szam1, szam2) => szam1 + szam2;

const udvozlet = name => `Üdvözöllek, kedves ${name}!`;