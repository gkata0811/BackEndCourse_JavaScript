console.log("dátum");

let d = new Date();
console.log(d);

/*
    - A számítógépes időszámítás 1970 január 1-vel kezdődik
    - Amit JavaScript-ben ezredmásodpercekben határozunk meg
        - Ezt nevezzük időbályegnek
        - Vagyis az időbélyeg(timestamp) nem más, mint az 1970.01.01-től eltelt ezredmásodpercek száma
    - JavaScript-ben az idő mértékegysége az ezredmásodperc
*/

/*
    Dátumok inicializálása
*/

let d1 = new Date('2025-05-15');    // inicializálás dátum stringgel
console.log(d1);

let d2 = new Date('2025-05-15 15:35:45');   // inicializálás dátumidő stringgel
console.log(d2);

/*
    Inicializálás paraméter listával

    new Date(year, month, date, hours, minutes, seconds, miliseconds);
*/

const d3 = new Date(2025, 4, 15);
console.log(d3);

const d4 = new Date(2025, 4, 15, 15, 35, 45);
console.log(d4);

/*
    Inicializálás időbélyeggel
*/
const d5 = new Date(2137690346914);
console.log(d5);

// Inicializálás Date objecttel
const d4d = new Date(d4);
console.log(d4d);

/*
    .getTime(): number - időbélyeg
    .getFullYear() - visszaadja az évet
    .getMonth() - visszaadja a hónap tömbindexét
*/

let honapok = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

console.log(
    `Most ${honapok[d.getMonth()]} hónapot írunk.`
)

/*
    .getDate() - visszaadja, hogy hányadika van
    .getDay() - visszaadja a hét napjának tömbindexét
*/

let hetnapja = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"]

console.log(
    `Ma ${hetnapja[d.getDay()]} van.`
)

/*
    .getHours() - visszaadja az órát
    .getMinutes() - visszaadja a percet
    .getSeconds() - visszaadja a másodpercet
    .getMiliseconds() - visszaadja az ezredmásodpercet
*/

/*
    Minden .get függvénynek megvan a .set társa is, amivel az adott paramétert be lehet állítani.
        Kivéve a .getDay() függvényt.

    !!!Figyelem!!!
        - A JavaScript szépen kezeli a túlcsordulást
            (Például a setDate esetében lehet hasznos)

        - Az összehasonlító és arimetikai műveletekben a dátum időbélyeggé alakul, így ki lehet vonni két dátumot egymásból, össze lehet őket hasonlítani...
*/

let keplet = 1000 * 60 * 60 * 24 * 365;

/*
    A dátumok nemzetköziesítése
*/

console.log(
    d.toLocaleString("hu-HU", {dateStyle: "full", timeStyle: "long"})
);

console.log(
    d.toLocaleString(navigator.language, {dateStyle: "full", timeStyle: "long"})
);

const dateFormat = new Intl.DateTimeFormat(navigator.language, {dateStyle: "full", timeStyle: "long"});

console.log(
    dateFormat.format(d5)
);