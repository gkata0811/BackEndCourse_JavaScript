/*
    1. //-[Tömbfeltöltés]-//
    Írj egy függvényt, mely segítségével a felhasználó fel tud tölteni egy tömböt.
    Prompt segítségével, addig kérünk be egy újabb elemet, amíg azt nem gépeljük be, hogy "stop"
*/

function tombFeltoltes() {
    let tomb = [];
    let elem = prompt("1. feladat - Adj meg egy elemet! (Kilépés: stop)");

    while (elem !== "stop") {
        tomb.push(elem);
        elem = prompt("Adj meg egy újabb elemet! (Kilépés: stop)");
    }

    return tomb;
}

let feltoltottTomb = tombFeltoltes();
console.log("1. feladat - A feltöltött tömb:");
console.log(feltoltottTomb);


/*
    2. //-[Szószámláló]-//
    Írj függvényt, mely megszámolja egy szöveg szavainak számát.
    Tehát bemeneti értéke egy szöveg, kimenete pedig
    a szöveg szavainak száma.
*/

function szoSzamlalo(szoveg) {
    szoveg = szoveg.trim();

    if (szoveg === "") {
        return 0;
    }

    return szoveg.split(/\s+/).length;
}

let szoveg2 = prompt("2. feladat - Írj be egy szöveget!");

console.log("2. feladat - Szavak száma:");
console.log(szoSzamlalo(szoveg2));


/*
    3. //-[Magánhangzó számláló]-//
    Írj függvényt, mely megszámolja egy adott karakterlánc
    magánhangzóinak számát!
*/

function maganhangzoSzamlalo(szoveg) {
    let maganhangzok = "aáeéiíoóöőuúüű";
    let darab = 0;

    szoveg = szoveg.toLowerCase();

    for (let i = 0; i < szoveg.length; i++) {
        if (maganhangzok.includes(szoveg[i])) {
            darab++;
        }
    }

    return darab;
}

let szoveg3 = prompt("3. feladat - Írj be egy szöveget!");

console.log("3. feladat - Magánhangzók száma:");
console.log(maganhangzoSzamlalo(szoveg3));


/*
    4. //-[Fájl kiterjesztés]-//
    Írj egy függvényt, mely visszaadja egy fájl kiterjesztést.
    (Bemenetként megkapja a fájl nevét, vagy egy teljes elérési útvonalat.)
*/

function fajlKiterjesztes(fajl) {
    let fajlNev = fajl.split(/[/\\]/).pop();

    if (!fajlNev.includes(".")) {
        return "";
    }

    return fajlNev.split(".").pop();
}

let fajl = prompt(
    "4. feladat - Adj meg egy fájlnevet vagy teljes elérési útvonalat!"
);

console.log("4. feladat - Fájl kiterjesztése:");
console.log(fajlKiterjesztes(fajl));


/*
    5. //-[Dr.]-//
    Írj egy "dr(name)" függvényt, mely doktorrá nevezi ki azokat a neveket,
    amelyek előtt nincs ott a "dr." és visszatér az új névvel.

    Ha a bemenetként kapott név már rendelkezik a "dr." előtaggal,
    akkor simán a bemeneti névvel térjen vissza.
*/

function dr(name) {
    if (name.toLowerCase().startsWith("dr.")) {
        return name;
    }

    return "Dr. " + name;
}

let nev = prompt("5. feladat - Adj meg egy nevet!");

console.log("5. feladat - Eredmény:");
console.log(dr(nev));


/*
    6. //-[Script a vége]-//
    Írj függvényt annak tesztelésére, hogy egy karakterlánc
    "Script"-re végződik-e.

    A karakterlánc hosszának 6-nál nagyobbnak vagy egyenlőnek kell lennie.
*/

function scriptAVege(szoveg) {
    if (szoveg.length < 6) {
        return false;
    }

    return szoveg.endsWith("Script");
}

let szoveg6 = prompt(
    '6. feladat - Adj meg egy szöveget! Megvizsgálom, hogy "Script"-re végződik-e.'
);

console.log("6. feladat - Script-re végződik:");
console.log(scriptAVege(szoveg6));


/*
    7. //-[Sok lúd disznót győz :)]-//
    Írj függvényt, mely megnézi, hogy egy karakterláncban
    kis vagy nagy betűből van-e több, és az egész stringet,
    olyanná alakítja.
*/

function kisVagyNagy(szoveg) {
    let kisbetu = 0;
    let nagybetu = 0;

    for (let i = 0; i < szoveg.length; i++) {

        // Megvizsgáljuk, hogy az adott karakter betű-e
        if (szoveg[i].toLowerCase() !== szoveg[i].toUpperCase()) {

            if (szoveg[i] === szoveg[i].toLowerCase()) {
                kisbetu++;
            } else {
                nagybetu++;
            }
        }
    }

    if (nagybetu > kisbetu) {
        return szoveg.toUpperCase();
    } else {
        return szoveg.toLowerCase();
    }
}

let szoveg7 = prompt(
    "7. feladat - Adj meg egy kis- és nagybetűket tartalmazó szöveget!"
);

console.log("7. feladat - Átalakított szöveg:");
console.log(kisVagyNagy(szoveg7));


/*
    8. //-[Fogas kérdés]-//
    Írjatok egy szójáték függvényt, mely bemenetként megkap egy szöveget,
    kimenetként pedig a szó első és utolsó betűjét.
    A két betű közt pedig annyi pontot, ahány karakter van a 2 betű közt.

    ("Fogas kérdés" esetén a kimenet "F..........s" lenne.)
*/

function fogasKerdes(szoveg) {
    if (szoveg.length <= 2) {
        return szoveg;
    }

    let elsoBetu = szoveg[0];
    let utolsoBetu = szoveg[szoveg.length - 1];
    let pontok = ".".repeat(szoveg.length - 2);

    return elsoBetu + pontok + utolsoBetu;
}

let szoveg8 = prompt("8. feladat - Adj meg egy szöveget!");

console.log("8. feladat - Eredmény:");
console.log(fogasKerdes(szoveg8));


/*
    9. //-[Szomszédos betű]-//
    Írj függvényt, amely egy adott karakterlánc minden karakterét
    lecseréli az angol ABC következőjére!

    Megjegyzés: az „a” helyett „b” lesz, a „z” helyett „a”.
*/

function szomszedosBetu(szoveg) {
    let eredmeny = "";

    for (let i = 0; i < szoveg.length; i++) {
        let karakter = szoveg[i];

        // Kisbetűk
        if (karakter >= "a" && karakter <= "z") {

            if (karakter === "z") {
                eredmeny += "a";
            } else {
                eredmeny += String.fromCharCode(
                    karakter.charCodeAt(0) + 1
                );
            }

        // Nagybetűk
        } else if (karakter >= "A" && karakter <= "Z") {

            if (karakter === "Z") {
                eredmeny += "A";
            } else {
                eredmeny += String.fromCharCode(
                    karakter.charCodeAt(0) + 1
                );
            }

        } else {
            // Szóközök, számok, írásjelek stb. változatlanok maradnak
            eredmeny += karakter;
        }
    }

    return eredmeny;
}

let szoveg9 = prompt(
    "9. feladat - Adj meg egy szöveget!"
);

console.log("9. feladat - Szomszédos betűk:");
console.log(szomszedosBetu(szoveg9));