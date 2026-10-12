console.log("negyedik házi feladat");

/*
    1. //-[Monogramm]-//
    Írj egy monogram függvényt, mely paraméterként megkap egy nevet, és visszatér a név monogramjával.
    pl: monogram("Kovács János Géza"): //-> K.J.G.
    (tehát visszatér a kezdőbetűkkel)

    Professzionális verzió:
    a. A kettős betűkre is működjön
    b. Kötőjelek esetén is működjön

    pl: monogram("Horváth-Zsombori Ádám Csongor") //-> H.-Zs.Á.CS.
*/

function monogram(nev) {
    let szavak = nev.trim().split(" ");
    let eredmeny = "";

    for (let i = 0; i < szavak.length; i++) {
        let nevek = szavak[i].split("-");

        for (let j = 0; j < nevek.length; j++) {
            if (nevek[j] === "") {
                continue;
            }

            let kezdoBetu = nevek[j].charAt(0).toUpperCase();
            let masodikBetu = nevek[j].charAt(1).toLowerCase();
            let harmadikBetu = nevek[j].charAt(2).toLowerCase();

            if ((kezdoBetu + masodikBetu + harmadikBetu).toLowerCase() === "dzs") {
                kezdoBetu += masodikBetu + harmadikBetu;
            } else if (/^(cs|dz|gy|ly|ny|sz|ty|zs)$/i.test(kezdoBetu + masodikBetu)) {
                kezdoBetu += masodikBetu;
            }

            eredmeny += kezdoBetu + ".";

            if (j < nevek.length - 1) {
                eredmeny += "-";
            }
        }
    }

    return eredmeny;
}

console.log(monogram("Kovács János Géza"));
console.log(monogram("Horváth-Zsombori Ádám Csongor"));


/*
    2. //-[Palindróma]-//
    Készítsetek egy palindroma függvényt, mely bementi értékként megkap egy szöveget vagy számsort, és true értékkel tér vissza,
    amennyiben a bemeneti érték palindroma. false értékkel amennyiben nem.
    Azokat a szavakat, számsorokat, kisebb szövegeket hívjuk palindromáknak, melyek visszafele való olvasata is ugyan az.
    pl: Lehel, Indul a pap aludni. , 939... stb...
*/

function palindroma(szoveg) {
    szoveg = String(szoveg).toLowerCase();
    szoveg = szoveg.replace(/[^a-z0-9áéíóöőúüű]/gmi, "");

    let forditott = szoveg.split("").reverse().join("");

    return szoveg === forditott;
}

console.log(palindroma("Lehel"));
console.log(palindroma("Indul a pap aludni."));
console.log(palindroma(939));
console.log(palindroma("JavaScript"));


/*
    3. //-[Előléptetés]-//
    Adott az alábbi beosztások tömb:

    const beosztasok = ["raktáros", "adminisztrátor", "logisztikus"];

    És adott az alábbi szöveg:

    let s = "A cégnél Sándor raktáros, Ottó logisztikus és Irma adminisztrátor, Jakab pedig biztonsági őr.";

    A feladat az, hogy az s szövegben léptessük elő "vezető" beosztásba azokat, akiknek
    pozíciója szerepel a beosztások tömbbe.
*/

const beosztasok = ["raktáros", "adminisztrátor", "logisztikus"];

let s = "A cégnél Sándor raktáros, Ottó logisztikus és Irma adminisztrátor, Jakab pedig biztonsági őr.";

for (let i = 0; i < beosztasok.length; i++) {
    let regex = new RegExp(beosztasok[i], "gmi");

    s = s.replace(regex, "vezető");
}

console.log(s);


/*
    4. //-[Ékezetmentesítő]-//
    Írkjatok egy "deAccent" nevű ékezetmentesítő függvényt, mely bemenetként megkap egy stringet, és visszatér az ékezetmentes változattal.
    Tehát az "á" hangot "a"-ra, az "ó" hangot "o"-ra, ... cseréli.
*/

function deAccent(szoveg) {
    let ekezetes = "áéíóöőúüűÁÉÍÓÖŐÚÜŰ";
    let ekezetNelkul = "aeiooouuuAEIOOOUUU";

    let eredmeny = "";

    for (let i = 0; i < szoveg.length; i++) {
        let karakter = szoveg[i];
        let index = ekezetes.indexOf(karakter);

        if (index !== -1) {
            eredmeny += ekezetNelkul[index];
        } else {
            eredmeny += karakter;
        }
    }

    return eredmeny;
}

console.log(deAccent("Árvíztűrő tükörfúrógép"));
console.log(deAccent("Jó reggelt kívánok!"));


/*
    5. //-[Ik-es igék]-//
    Adott az alábbi string:
*/

let cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet.";

/*
    Reguláris kifejezés segítségével szedjük ki a "cicus" változóból az ik-es igéket.
*/

console.log(
    cicus.match(/\b[a-záéíóöőúüű]+ik\b/gmi)
);


/*
    6. //-[Dátumidő]-//
    irjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat pl 2021.09.28 09:59 (UTC)
*/

let datumSzoveg = "A találkozó 2021.09.28 09:59 (UTC) időpontban lesz, a következő pedig 2022.10.15 14:30 (UTC).";

let datumok = datumSzoveg.match(/\d{4}\.\d{2}\.\d{2} \d{2}:\d{2} \(UTC\)/gmi);

console.log(datumok);


/*
    7. //-[Teljes nevek]-//
    Írjunk reguláris kifejezést, amely a teljes nevekre illeszkedik (Csaladnev Keresztnev)
    A név több tagból is állhat, mint 2, és illeszkedjen a kötőjeles nevekre is.
*/

let nevek = "Kovács János, Nagy Péter István, Horváth-Zsombori Ádám Csongor és Kiss Anna.";

let teljesNevek = nevek.match(/[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+(?:-[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)*(?: [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+(?:-[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)*)+/gm);

console.log(teljesNevek);


/*
    8. //-[Kifejezésszámláló]-//
    Írj egy függvényt, mely megszámolja, hogy egy adott kulcskifejezés, hányszor szerepel egy stringben.
*/

function kifejezesSzamlalo(szoveg, kifejezes) {
    if (kifejezes === "") {
        return 0;
    }

    let eredmeny = 0;
    let szovegKisbetus = szoveg.toLowerCase();
    let kifejezesKisbetus = kifejezes.toLowerCase();

    let index = szovegKisbetus.indexOf(kifejezesKisbetus);

    while (index !== -1) {
        eredmeny++;

        index = szovegKisbetus.indexOf(
            kifejezesKisbetus,
            index + kifejezesKisbetus.length
        );
    }

    return eredmeny;
}

let mondat = "A cica alszik. A cica eszik. A cica játszik.";

console.log(kifejezesSzamlalo(mondat, "cica"));
console.log(kifejezesSzamlalo(mondat, "kutya"));


/*
    9. //-[Monogram]-//
    Írj reguláris kifejezést, amely kiveszi egy szövegből a monogrammokat.
*/

let monogramSzoveg = "A könyvet K.J.G. írta, a másikat pedig H.-Zs.Á.Cs. készítette.";

let monogramok = monogramSzoveg.match(/(?:[A-ZÁÉÍÓÖŐÚÜŰ](?:s|z|y)?\.-?){2,}/gm);

console.log(monogramok);


/*
    10. //-[Rendszám]-//
    Írj reguláris kifejezést, ami az XXX-123 és az XX XX-123 típusu rendszámokra illeszkedik.
*/

let auto = 'Egy piros ABC-123 rendszámú autó parkolt a ház előtt, és egz AB CD-456 rendszámú autóval érkezett a barátom.';

console.log(
    auto.match(/(?:[A-Z]{3}|[A-Z]{2}\s[A-Z]{2})-\d{3}/gmi)
);

console.log(
    auto.match(/(?:[A-Z]{2}\s)?[A-Z]{2,3}-\d{3}/gmi)
);