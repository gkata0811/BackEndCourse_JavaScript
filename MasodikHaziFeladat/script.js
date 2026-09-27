console.log("második házi feladat");

/*
	1. //-[Prim]-//
	Írjunk egy "prim" nevezetű függvényt, mely egy számról eldönti, hogy prím szám-e vagy sem. (Azokat az 1-nél nagyobb természetese számokat nevezzük prímszámoknak, melyeknek 1-en és önmagukon kívül nincs osztójuk)
*/

// Létrehozzuk a prim nevű függvényt.
// A "szam" paraméter az a szám, amelyről el szeretnénk dönteni, hogy prím-e.
function prim(szam) {

    // A prímszámok 1-nél nagyobb egész számok.
    // Ha a szám 1 vagy kisebb, illetve nem egész szám, akkor nem lehet prím.
    if (szam <= 1 || !Number.isInteger(szam)) {
        return false;
    }

    // 2-től kezdve megvizsgáljuk, hogy van-e olyan szám,
    // amellyel maradék nélkül osztható.
    // Elég a szám négyzetgyökéig vizsgálni az osztókat.
    for (let i = 2; i <= Math.sqrt(szam); i++) {

        // A % operátor az osztási maradékot adja meg.
        // Ha 0 a maradék, találtunk egy osztót.
        if (szam % i === 0) {
            return false;
        }
    }

    // Ha nem találtunk osztót, akkor a szám prím.
    return true;
}

// Tesztelés:
console.log(prim(7));   // true
console.log(prim(10));  // false


/*
	2. //-[Műveletteszt]-//
	Írj függvényt mely megkap 2 operandust, és egy eredményt. A függvény döntse el, hogy a 4 alapművelet valamelyike, adhatja-e a megadott eredményt, ha igen, térjen vissza true értékkel, ha nem, egy false értékkel.
*/

// A függvény három paramétert kap:
// operandus1 = első szám
// operandus2 = második szám
// eredmeny = az ellenőrizendő eredmény
function muveletTeszt(operandus1, operandus2, eredmeny) {

    // Megnézzük, hogy összeadással megkapjuk-e az eredményt.
    if (operandus1 + operandus2 === eredmeny) {
        return true;
    }

    // Megnézzük a kivonást.
    if (operandus1 - operandus2 === eredmeny) {
        return true;
    }

    // Megnézzük a szorzást.
    if (operandus1 * operandus2 === eredmeny) {
        return true;
    }

    // Osztásnál figyelünk arra is, hogy nullával nem oszthatunk.
    if (operandus2 !== 0 && operandus1 / operandus2 === eredmeny) {
        return true;
    }

    // Ha egyik alapművelettel sem kaptuk meg az eredményt,
    // akkor false értékkel térünk vissza.
    return false;
}

// Tesztelés:
console.log(muveletTeszt(5, 3, 8));   // true, mert 5 + 3 = 8
console.log(muveletTeszt(5, 3, 15));  // true, mert 5 * 3 = 15
console.log(muveletTeszt(5, 3, 20));  // false


/*
	3. //-[Szorzótábla Generátor]-//
	Írjatok egy szorzótábla generátor függvényt, mely paraméterként megkap egy számot, és egy selectort.
      A függvény generálja le a paraméterként megkapott szám 10-es szorzótábláját, és jelenítse meg, a második paraméterként
      kapott selector innerHTML-jébe.
       pl:
           szorzotablaGenerator(8, "#content"); 
           // az alábbi kimenetet adja:
           // 1 * 8 = 8
           // 2 * 8 = 16
           // 3 * 8 = 24
           //   .
           //   .
           //   .
           // 10 * 8 = 80
*/

// A függvény első paramétere a szám,
// a második paramétere pedig egy CSS selector.
function szorzotablaGenerator(szam, selector) {

    // A querySelector segítségével megkeressük
    // a HTML-ben a megadott elemet.
    const elem = document.querySelector(selector);

    // Ebben a változóban fogjuk összegyűjteni a szorzótábla sorait.
    let szorzotabla = "";

    // 1-től 10-ig végigmegyünk a számokon.
    for (let i = 1; i <= 10; i++) {

        // Minden körben hozzáadunk egy új sort.
        // A <br> HTML-ben sortörést jelent.
        szorzotabla += `${i} * ${szam} = ${i * szam}<br>`;
    }

    // Az elkészült szorzótáblát beillesztjük
    // a kiválasztott HTML elembe.
    elem.innerHTML = szorzotabla;
}

// Példa:
// HTML-ben szükséges például:
// <div id="content"></div>
//
// Majd JavaScriptben:
// szorzotablaGenerator(8, "#content");


/*
	4. //-[Elől hátul egyforma-e?]-//
	Írj függvényt, mely leellenőrzi, hogy egy adott tömb első és utolsó eleme egyforma-e
*/

// A függvény egy tömböt kap paraméterként.
function elolHatulEgyforma(tomb) {

    // Ha a tömb üres, nincs első és utolsó eleme,
    // ezért false értékkel térünk vissza.
    if (tomb.length === 0) {
        return false;
    }

    // A tömb első eleme a 0. indexen található.
    // Az utolsó elem indexe mindig length - 1.
    return tomb[0] === tomb[tomb.length - 1];
}

// Tesztelés:
console.log(elolHatulEgyforma([1, 2, 3, 1])); // true
console.log(elolHatulEgyforma([1, 2, 3, 4])); // false


/*
	5. //-[Egyforma tömbök]-//
	Írj függvényt, mely összehasonlít 2 tömböt, és true értékkel tér vissza, ha a 2 tömb egyforma.
   Két tömb akkor egyforma, ha minden azonos indexen levő elemük egyforma.
*/

// A függvény két tömböt kap paraméterként.
function egyformaTombok(tomb1, tomb2) {

    // Ha a két tömb hossza különböző,
    // akkor biztosan nem lehetnek egyformák.
    if (tomb1.length !== tomb2.length) {
        return false;
    }

    // Végigmegyünk az első tömb összes elemén.
    for (let i = 0; i < tomb1.length; i++) {

        // Összehasonlítjuk az azonos indexen lévő elemeket.
        if (tomb1[i] !== tomb2[i]) {

            // Ha akár egyetlen eltérést találunk,
            // a két tömb nem egyforma.
            return false;
        }
    }

    // Ha minden elem megegyezett, true értéket adunk vissza.
    return true;
}

// Tesztelés:
console.log(egyformaTombok([1, 2, 3], [1, 2, 3])); // true
console.log(egyformaTombok([1, 2, 3], [1, 3, 2])); // false


/*
	6. //-[Közelebb 100-hoz]-//
	Írj Javascript programot, mely két megadott szám közül megkeresi, hogy melyik van közelebb a 100-hoz
*/

// A függvény két számot kap paraméterként.
function kozelebbSzazhoz(szam1, szam2) {

    // Math.abs() segítségével kiszámoljuk,
    // hogy az első szám milyen messze van 100-tól.
    const tavolsag1 = Math.abs(100 - szam1);

    // Ugyanezt kiszámoljuk a második számnál is.
    const tavolsag2 = Math.abs(100 - szam2);

    // Ha az első szám távolsága kisebb,
    // akkor az első szám van közelebb 100-hoz.
    if (tavolsag1 < tavolsag2) {
        return szam1;
    }

    // Ha a második távolsága kisebb,
    // akkor a második szám van közelebb.
    if (tavolsag2 < tavolsag1) {
        return szam2;
    }

    // Ha a két távolság egyforma,
    // akkor mindkét szám ugyanolyan közel van 100-hoz.
    return "A két szám egyforma távolságra van 100-tól.";
}

// Tesztelés:
console.log(kozelebbSzazhoz(90, 120)); // 90
console.log(kozelebbSzazhoz(80, 120)); // egyforma távolság


/*
	7. //-[Páros számpár]-//
	Írj JavaScript függvényt, mely bemenetként megkap egy számpárt, és igazat ad vissza, ha a összegük páros szám, hamisat, ha nem.
*/

// A függvény két számot kap.
function parosSzampar(szam1, szam2) {

    // Összeadjuk a két számot.
    const osszeg = szam1 + szam2;

    // Egy szám akkor páros, ha 2-vel osztva
    // az osztási maradéka 0.
    return osszeg % 2 === 0;
}

// Tesztelés:
console.log(parosSzampar(4, 6)); // true, mert 4 + 6 = 10
console.log(parosSzampar(4, 5)); // false, mert 4 + 5 = 9


/*
	8. //-[Értékteszt]-//
	Írj függvényt, amely ellenőriz két egész számot, és igazat ad vissza, ha valamelyik 15, vagy ha összegük vagy különbségük 15.
*/

// A függvény két egész számot kap paraméterként.
function ertekTeszt(szam1, szam2) {

    // Igazat adunk vissza, ha:
    // - az első szám 15,
    // - VAGY a második szám 15,
    // - VAGY az összegük 15,
    // - VAGY a különbségük 15.
    //
    // Math.abs() azért kell a különbségnél,
    // hogy például a 20 és 5, illetve az 5 és 20 is működjön.
    return (
        szam1 === 15 ||
        szam2 === 15 ||
        szam1 + szam2 === 15 ||
        Math.abs(szam1 - szam2) === 15
    );
}

// Tesztelés:
console.log(ertekTeszt(15, 3)); // true
console.log(ertekTeszt(10, 5)); // true, mert 10 + 5 = 15
console.log(ertekTeszt(20, 5)); // true, mert 20 - 5 = 15
console.log(ertekTeszt(10, 2)); // false


/*
	9. //-[Ellenkező előjel]-//
	Írj Javascript programot, mely bemenetként megkap 2 számot, és igazat ad vissza, ha a két szám ellenkező előjelű, hamisat, ha nem.
*/

// A függvény két számot kap paraméterként.
function ellenkezoElojel(szam1, szam2) {

    // Akkor ellenkező előjelűek, ha:
    // az első pozitív ÉS a második negatív,
    // VAGY
    // az első negatív ÉS a második pozitív.
    //
    // A 0-t itt nem tekintjük sem pozitívnak,
    // sem negatívnak.
    return (
        (szam1 > 0 && szam2 < 0) ||
        (szam1 < 0 && szam2 > 0)
    );
}

// Tesztelés:
console.log(ellenkezoElojel(5, -3));  // true
console.log(ellenkezoElojel(-5, 3));  // true
console.log(ellenkezoElojel(5, 3));   // false
console.log(ellenkezoElojel(-5, -3)); // false


/*
	10. //-[Korosztályhatározó]-//
	A fent bekért életkorról döntsük el, hogy melyik korosztályhoz tartozik. Ha az illető kisebb, mint 12 éves, 
   akkor, "gyerek", ha 12 és 17 év közt van, akkor "kamasz"-nak itéljük, 18 felett pedig "felnőtt"-nek.
   konzolban jelenítsd meg az eredményt.
*/

// Bekérjük a felhasználó életkorát.
// A prompt szöveget ad vissza, ezért Number segítségével számmá alakítjuk.
const eletkor = Number(prompt("Add meg az életkorodat:"));

// Megvizsgáljuk az életkort.
if (eletkor < 12) {

    // 12 év alatt gyerek.
    console.log("gyerek");

} else if (eletkor <= 17) {

    // Ha már nem kisebb 12-nél, de maximum 17,
    // akkor kamasz.
    console.log("kamasz");

} else {

    // Minden más esetben, tehát 18 éves kortól felnőtt.
    console.log("felnőtt");
}