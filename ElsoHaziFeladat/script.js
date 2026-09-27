/*
1. //-[Aritmetikai]-//

Gyakorlásként, prompt segítségével olvassatok be 2 számot, amit eltároltok egy-egy változóba,
és végezzétek el velük, a tanult aritmetikai műveleteket.
Az eredményeket, külön-külön változóba tároljátok el és az értékeiket, mutassátok meg konzolban.

Aritmetikai operátorok
    - "+" összeadás
    - "-" kivonás
    - "*" szorzás
    - "/" osztás
    - "%" maradékos osztás
    - "**" hatványozás
*/

// Két szám bekérése
let szam1 = Number(prompt("Add meg az első számot:"));
let szam2 = Number(prompt("Add meg a második számot:"));

// Aritmetikai műveletek
let osszeadas = szam1 + szam2;
let kivonas = szam1 - szam2;
let szorzat = szam1 * szam2;
let osztas = szam1 / szam2;
let maradek = szam1 % szam2;
let hatvany = szam1 ** szam2;

// Eredmények megjelenítése a konzolban
console.log("Összeadás eredménye:", osszeadas);
console.log("Kivonás eredménye:", kivonas);
console.log("Szorzás eredménye:", szorzat);
console.log("Osztás eredménye:", osztas);
console.log("Maradékos osztás eredménye:", maradek);
console.log("Hatványozás eredménye:", hatvany);



/*
2. //-[maradék]-//

Konzolban jelenítsétek meg a az első feladatban (az adatbázisban a 155.) beolvasott két szám szorzatának,
a 3-al való osztási maradékát. Ebben a feladatban, nem szükség újra összezorozni a két számot,
hiszen annak eredményét eltároltátok mér egy változóban, az első feladatban.
A feladat megoldásához, használjátok fel ezt a változót!
*/

// Az első feladatban eltárolt szorzat változót használjuk
let szorzatMaradeka = szorzat % 3;

console.log(
    "A két szám szorzatának 3-mal való osztási maradéka:",
    szorzatMaradeka
);



/*
3. //-[Négyszög terültete]-//

Írj javasvcript programot, mely kiszámolja egy téglalap, vagy négyzet területét
*/

// A négyszög két oldalának bekérése
let aOldal = Number(prompt("Add meg a négyszög egyik oldalát:"));
let bOldal = Number(prompt("Add meg a négyszög másik oldalát:"));

// Terület kiszámítása
let terulet = aOldal * bOldal;

console.log("A négyszög területe:", terulet);



/*
4. //-[Kör kerülete]-//

Írj javasvcript programot, mely kiszámolja egy kör kerületét.
prompt segítségével olvassátok be a kör sugarát, amiből meghatároyható a kör kerülete.
*/

// A kör sugarának bekérése
let sugar = Number(prompt("Add meg a kör sugarát:"));

// Kör kerületének kiszámítása
let korKerulet = 2 * Math.PI * sugar;

console.log("A kör kerülete:", korKerulet);



/*
5. //-[bemutatkozás]-//

Prompt segítségével olvassd be egy személy családnevét, keresztnevét, és életkorát.
Majd egy "bemutatkozas" változóba egy template string segítségével, rakd össze a alábbi
bemutatkozó szöveget.

Ha a beolvasott adatok: "Gipsz", "Jakab" és "30", akkor a bemutatkozó szöveg a következő képen néz ki:

"A nevem Gipsz Jakab, és 30 éves vagyok."
*/

// Adatok bekérése
let csaladnev = prompt("Add meg a családneved:");
let keresztnev = prompt("Add meg a keresztneved:");
let eletkor = prompt("Add meg az életkorod:");

// Bemutatkozó szöveg elkészítése template string segítségével
let bemutatkozas =
    `A nevem ${csaladnev} ${keresztnev}, és ${eletkor} éves vagyok.`;

// Bemutatkozás megjelenítése
console.log(bemutatkozas);