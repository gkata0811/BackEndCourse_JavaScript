console.log("Date");

let d = new Date();
console.log(d);


/*
    - A számítógépes időszámítás 1970 Január 1-től kezdődik
    - Amit Javascriptben ezredmásodpercekben határozunk meg.
        - Ezt nevezzük időbélyegnek.
        - Vagyis az időbőbélyeg (timestamp) nemmás, mint az 1970 Január 1-től eltelt miliszekundumok száma
    - Javascritben az idő mértékegysége az ezredmásodperc
    
*/

/*
    Dátumok inicialisálása


*/

let d1 = new Date('2025-05-15'); //inicializálás dátum stringgel
console.log(d1);

let d2 = new Date('2025-05-15T15:35:45'); //inicializálás dátumidő sztringgel
console.log(d2);

/*
    Inicilaizálás paraméterlisátval

    new Date(year, month, date, hours, minutes, seconds, miliseconds);
*/

const d3 = new Date(2025, 4, 15);
console.log(d3);


const d4 = new Date(2025, 4, 15, 15, 35, 45);
console.log(d4);

/*
    inicializálás időbélyeggel
*/
const d5 = new Date(1121345647025);
console.log(d5);

// inicializálás Date objecttel
const d4d = new Date(d4);
console.log(d4d);

/*
    .getTime():number - időbélyeg

    .getFullYear():number - vissza adja az évet
    .getMonth() - vissza tér a hónap tömbindexével

*/


let honapok = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

console.log(
    `Most ${honapok[d.getMonth()]} hónapot írunk`
);

/*
    .getDate() - visszaadja, hogy hányadika van
    .getDay() - vissza adja a hét napjának a tömbindexét.
*/

let hetnapja = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];

console.log(
    `Ma ${hetnapja[d.getDay()]} van`
);

/*
    .getHours() - visszaadja az órát
    .getMinutes() - visszaadja az percetű
    .getSeconds() - visszaadja a másodpercet
    .getMiliseconds() - visszaadja az ezredmásodprecet
*/

/*
    Minden .get függvénynek, megvan a .set társa is, amivel az adott paramétert be lehet állítani.
        Kivéve a getDay függvényt.

    !!!Figyelem!!!
        - A Javascript szépenn kezeli a túlcsordulást!
        (Például a setDate esetében lehet ez hasznos)

        - Az összehasonlító és aritmetikai műveletekben a dátum időbélyeggé alakul
         Így ki lehet vonni őket egymásból, össze lehet hasonlítani... stb...  

*/

let keplet = 1000 * 60 * 60 * 24 * 365; 

/*
    A dátumok nezetköziesítése


*/

console.log(
    d.toLocaleString(navigator.language, {dateStyle: "full", timeStyle: "long"})
);

const dateFormat = new Intl.DateTimeFormat(navigator.language, {dateStyle: "full", timeStyle: "long"});

console.log(
    dateFormat.format(d5)
);

console.log(
    d.toLocaleString(navigator.language, {weekday: "long"})
);
