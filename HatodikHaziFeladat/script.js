console.log("hatodik házi feladat");

/*
	1. //-[Leghosszabb elem (string)]-//
	Írj függvényt, mely visszaadja egy karakterláncokat tartalmazó tömbből, a leghosszabb karakterláncot.
*/

function leghosszabb(tomb) {
    if (tomb.length === 0) {
        return null;
    }

    let leghosszabbSzo = tomb[0];

    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i].length > leghosszabbSzo.length) {
            leghosszabbSzo = tomb[i];
        }
    }

    return leghosszabbSzo;
}

console.log(leghosszabb(["alma", "körte", "szilva", "ananász"]));
console.log(leghosszabb(["kutya", "macska", "elefánt"]));
console.log(leghosszabb([]));


/*
	2. //-[MIn keresés]-//
	Írj függvényt, amely megkeresi egy tömb legkisebb elemnét
*/

function minimum(tomb) {
    if (tomb.length === 0) {
        return null;
    }

    let legkisebb = tomb[0];

    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i] < legkisebb) {
            legkisebb = tomb[i];
        }
    }

    return legkisebb;
}

console.log(minimum([5, 12, 3, 25, 8]));
console.log(minimum([100, 50, 200, 150]));
console.log(minimum([-10, -5, -20, -1]));


/*
	3. //-[Max szomszéd]-//
	Írj függvényt, mely megkeresi egy adott egész számokat tartalmazó tömb két szomszédos eleme közötti maximális különbséget.
*/

function maxSzomszed(tomb) {
    if (tomb.length < 2) {
        return null;
    }

    let legnagyobbKulonbseg = 0;

    for (let i = 0; i < tomb.length - 1; i++) {
        let kulonbseg = Math.abs(tomb[i] - tomb[i + 1]);

        if (kulonbseg > legnagyobbKulonbseg) {
            legnagyobbKulonbseg = kulonbseg;
        }
    }

    return legnagyobbKulonbseg;
}

console.log(maxSzomszed([1, 5, 3, 12, 8]));
console.log(maxSzomszed([10, 20, 50, 15]));
console.log(maxSzomszed([5, 5, 5, 5]));


/*
	4. //-[Intervallumszűrő]-//
	Írj programot, mely kiszűri, a "numbers" tömbből, a 20, és 50 közé eső számokat.
        - lehetőleg használjatok tömbkezelő függvényeket.
*/

let numbers = [10, 25, 30, 55, 45, 18, 50, 20, 70, 35];

let szurtSzamok = numbers.filter(function(szam) {
    return szam >= 20 && szam <= 50;
});

console.log(szurtSzamok);


/*
	5. //-[Primhatározó]-//
	Készíts egy olyan függvényt, amely bemeneti paraméterként megkapja egy intervallum határait,
        kimenetként pedig, visszatér a bemenetként kapott két szám közé eső prímszámok tömbjével.
*/

function primhatarozo(also, felso) {
    let primszamok = [];

    for (let i = also; i <= felso; i++) {
        if (i < 2) {
            continue;
        }

        let prim = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prim = false;
                break;
            }
        }

        if (prim === true) {
            primszamok.push(i);
        }
    }

    return primszamok;
}

console.log(primhatarozo(1, 20));
console.log(primhatarozo(10, 30));
console.log(primhatarozo(20, 50));


/*
	6. //-[Keverés]-//
	Írj függvényt, mely összekeveri egy tömb elemeit.
*/

function keveres(tomb) {
    for (let i = tomb.length - 1; i > 0; i--) {
        let veletlenIndex = Math.floor(Math.random() * (i + 1));

        let ideiglenes = tomb[i];
        tomb[i] = tomb[veletlenIndex];
        tomb[veletlenIndex] = ideiglenes;
    }

    return tomb;
}

console.log(keveres([1, 2, 3, 4, 5]));
console.log(keveres(["alma", "körte", "szilva", "barack"]));


/*
	7. //-[Kalendárium]-//
	Adott az alábbi szöveg:
*/

let szoveg = "Márton március 25-én indul diplomáciai útra, mert 26-án fontos tárgyalása van, ahol 13 ügyféllel találkozik. Utána siet haza, hogy elérje a 28-án rendezett konferenciát.";

/*
    Írjunk reguláris kifejezéseket, mely kiveszi azokat a számokat, melyeket kötőjeles toldalék követ. Ám az eredményben, csak a számok legyenek.
    tehát a szoveg.match kimenete Array(3) [ "25", "26", "28" ] kell legyen. A 13 nem szerepeljen benne.

    .a. Ha ez megvan, akkor próbáljátok úgy átalakítani ezt a reguláris kifejezést, hogy akkor is működjön, ha némely hónap napja,
       még régiesen van meghatározva, tehát, hogy pont is van a szám után.
*/

let napok = szoveg.match(/\d+(?=-[a-záéíóöőúüű]+)/gmi);

console.log(napok);

// 7.a. Megoldás ponttal írt dátumokra is

let szoveg2 = "Márton március 25.-én indul, 26-án tárgyalása van, majd 28.-án konferenciára megy.";

let napok2 = szoveg2.match(/\d+(?=\.?-[a-záéíóöőúüű]+)/gmi);

console.log(napok2);


/*
	8. //-[Valós Óra]-//
	Írjatok reguláris kifejezést, mely egy valós óra:perc-re illeszkedik. 
        - A formátum tehát: hh:mm
        - ha véletlenül valaki nem tudná olvasni a dátum idő formátumokat: a "hh" azt jelenti, hogy a hours 2 karakteren, míg az "mm", hogy a minutes 2 karakteren
       !A valós óra:perc, azt jelenti, hogy csak akkor illeszkedik, ha az idő 00:00 és 23:59 tartományban mozog.
*/

function valosOra(ido) {
    let regex = /^([01]\d|2[0-3]):[0-5]\d$/;

    return regex.test(ido);
}

console.log(valosOra("12:30"));
console.log(valosOra("23:59"));
console.log(valosOra("00:00"));
console.log(valosOra("25:30"));
console.log(valosOra("12:75"));


/*
	9. //-[Számfordító]-//
	Írj függvényt, mely megfordítja egy numerikus érték karaktereinek a sorrendjét.
*/

function szamfordito(szam) {
    let szoveg = String(szam);

    let forditott = szoveg.split("").reverse().join("");

    return Number(forditott);
}

console.log(szamfordito(12345));
console.log(szamfordito(9876));
console.log(szamfordito(256));


/*
	10. //-[Sorba]-//
	Írj függvényt, mely egy szöveg felsorolás tagjait ABC szerint sorba rendezi. 
(Szövegfelsorolás, amikor egy stringbe van a felsorolás: "Alma, Körte, Szilva, Barack, Ananász")
*/

function sorba(szoveg) {
    let elemek = szoveg.split(",");

    for (let i = 0; i < elemek.length; i++) {
        elemek[i] = elemek[i].trim();
    }

    elemek.sort(function(a, b) {
        return a.localeCompare(b, "hu");
    });

    return elemek.join(", ");
}

console.log(sorba("Alma, Körte, Szilva, Barack, Ananász"));
console.log(sorba("Kutya, Macska, Elefánt, Zebra, Cica"));