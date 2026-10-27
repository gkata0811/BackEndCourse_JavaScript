console.log("hetedik házi feladat");

/*
	1. //-[Leggyakoribb]-//
	Írj függvényt, mely megkeresi egy adott egész számok tömbjében leggyakrabban előforduló számot.
*/

function leggyakoribb(tomb) {
    if (tomb.length === 0) {
        return null;
    }

    let legtobbszor = 0;
    let eredmeny = tomb[0];

    for (let i = 0; i < tomb.length; i++) {
        let darab = 0;

        for (let j = 0; j < tomb.length; j++) {
            if (tomb[i] === tomb[j]) {
                darab++;
            }
        }

        if (darab > legtobbszor) {
            legtobbszor = darab;
            eredmeny = tomb[i];
        }
    }

    return eredmeny;
}

console.log(leggyakoribb([1, 2, 2, 3, 3, 3, 4]));
console.log(leggyakoribb([5, 5, 2, 2, 2, 8, 8]));
console.log(leggyakoribb([1, 1, 2, 2]));


/*
	2. //-[Tömbfelosztás]-//
	Írj függvényt, amely egy pozitív egész számokat tartalmazó tömböt, két részre oszt. 
        Az első elem az első részhez tartozik, a második elem a második részhez, a harmadik elem az első részhez és így tovább. 
        Számítsátok ki a két rész összegét, és a függvény térjen vissza egy 4 elemű tömbbel.
        [ [első résztömb], első résztömb összege, [második résztömb], második résztömb összege ]
        [1, 2, 3, 4, 5, 6] paramétert esetén a visszatérési érték:
        [[1, 3, 5], 9, [2, 4, 6], 12]
*/

function tombFelosztas(tomb) {
    let elso = [];
    let masodik = [];

    let elsoOsszeg = 0;
    let masodikOsszeg = 0;

    for (let i = 0; i < tomb.length; i++) {
        if (i % 2 === 0) {
            elso.push(tomb[i]);
            elsoOsszeg += tomb[i];
        } else {
            masodik.push(tomb[i]);
            masodikOsszeg += tomb[i];
        }
    }

    return [elso, elsoOsszeg, masodik, masodikOsszeg];
}

console.log(tombFelosztas([1, 2, 3, 4, 5, 6]));
console.log(tombFelosztas([10, 20, 30, 40, 50]));
console.log(tombFelosztas([5, 10, 15]));


/*
	3. //-[Ms átváltó]-//
	Írj függvényt, mely a milisecundomot, átváltja napokra.
*/

function msAtvalto(ms) {
    let egyNap = 24 * 60 * 60 * 1000;

    return ms / egyNap;
}

console.log(msAtvalto(86400000));
console.log(msAtvalto(172800000));
console.log(msAtvalto(43200000));


/*
	4. //-[Dátumkülönbség]-//
	Írj függvényt, mely visszaadja, hogy hány nap telt el 2 dátum közt.
*/

function datumKulonbseg(datum1, datum2) {
    let elsoDatum = new Date(datum1);
    let masodikDatum = new Date(datum2);

    let kulonbseg = Math.abs(masodikDatum - elsoDatum);

    let napok = Math.floor(kulonbseg / (24 * 60 * 60 * 1000));

    return napok;
}

console.log(datumKulonbseg("2026-01-01", "2026-01-10"));
console.log(datumKulonbseg("2026-03-01", "2026-03-15"));
console.log(datumKulonbseg("2026-05-20", "2026-05-10"));


/*
	5. //-[Date különbség részletező]-//
	Írj függvényt, mely egy objectbe adja vissza, hogy hány év, hány hónap, hány nap, hány óra, és hány perc telt el 2 dátum közt.
*/

function datumReszletezo(datum1, datum2) {
    let elsoDatum = new Date(datum1);
    let masodikDatum = new Date(datum2);

    if (elsoDatum > masodikDatum) {
        let ideiglenes = elsoDatum;
        elsoDatum = masodikDatum;
        masodikDatum = ideiglenes;
    }

    let evek = masodikDatum.getFullYear() - elsoDatum.getFullYear();
    let honapok = masodikDatum.getMonth() - elsoDatum.getMonth();
    let napok = masodikDatum.getDate() - elsoDatum.getDate();
    let orak = masodikDatum.getHours() - elsoDatum.getHours();
    let percek = masodikDatum.getMinutes() - elsoDatum.getMinutes();

    if (percek < 0) {
        percek += 60;
        orak--;
    }

    if (orak < 0) {
        orak += 24;
        napok--;
    }

    if (napok < 0) {
        let elozoHonap = new Date(
            masodikDatum.getFullYear(),
            masodikDatum.getMonth(),
            0
        );

        napok += elozoHonap.getDate();
        honapok--;
    }

    if (honapok < 0) {
        honapok += 12;
        evek--;
    }

    return {
        ev: evek,
        honap: honapok,
        nap: napok,
        ora: orak,
        perc: percek
    };
}

console.log(datumReszletezo(
    "2020-01-10T10:20:00",
    "2023-04-15T15:45:00"
));

console.log(datumReszletezo(
    "2024-05-20T12:30:00",
    "2025-08-25T18:50:00"
));


/*
	6. //-[How old]-//
	Írj howOld(birthDate) függvényt, mely paraméterként megkapja egy személy születési dátumát, és visszatér az illető korával. (vagyis, hogy hány éves)
*/

function howOld(birthDate) {
    let szuletes = new Date(birthDate);
    let ma = new Date();

    let kor = ma.getFullYear() - szuletes.getFullYear();

    let aktualisHonap = ma.getMonth();
    let szuletesiHonap = szuletes.getMonth();

    if (aktualisHonap < szuletesiHonap ||
        (aktualisHonap === szuletesiHonap &&
        ma.getDate() < szuletes.getDate())) {
        kor--;
    }

    return kor;
}

console.log(howOld("2000-05-15"));
console.log(howOld("1995-12-20"));
console.log(howOld("2005-01-10"));


/*
	7. //-[Még hány nap]-//
	Írj függvényt, mely meghatározza, hogy hány nap van még egy meghatározott dátumig. Ha már elmúlt az adott dátum, akkor egy negatív számmal tárjen vissza, annyival, ahány nappal elmúlt, az adott dátum.
*/

function megHanyNap(datum) {
    let ma = new Date();
    let celDatum = new Date(datum);

    ma.setHours(0, 0, 0, 0);
    celDatum.setHours(0, 0, 0, 0);

    let kulonbseg = celDatum - ma;

    let napok = Math.round(kulonbseg / (24 * 60 * 60 * 1000));

    return napok;
}

console.log(megHanyNap("2026-12-31"));
console.log(megHanyNap("2026-01-01"));
console.log(megHanyNap("2027-06-15"));


/*
	8. //-[Karácsony]-//
	Írj függvényt, mely megmutatja, hogy hány nap van még karácsonyig.
*/

function karacsony() {
    let ma = new Date();

    let ev = ma.getFullYear();

    let karacsonyDatum = new Date(ev, 11, 24);

    ma.setHours(0, 0, 0, 0);

    if (ma > karacsonyDatum) {
        karacsonyDatum = new Date(ev + 1, 11, 24);
    }

    let kulonbseg = karacsonyDatum - ma;

    let napok = Math.round(kulonbseg / (24 * 60 * 60 * 1000));

    return napok;
}

console.log(karacsony());


/*
	9. //-[Validálás]-//
	Írj egy javascript függvént, mely megkapja egy dátum paramétereit, isValidDate(year:number, month:number, day:number):boolean és true értékkel tér vissza, ha a paraméterek egy érvényes dátum paraméterei, és false értékkel, ha nem.
*/

function isValidDate(year, month, day) {
    if (!Number.isInteger(year) ||
        !Number.isInteger(month) ||
        !Number.isInteger(day)) {
        return false;
    }

    if (year < 1 || month < 1 || month > 12 || day < 1) {
        return false;
    }

    let datum = new Date(2000, month - 1, day);

    datum.setFullYear(year);

    if (datum.getFullYear() === year &&
        datum.getMonth() === month - 1 &&
        datum.getDate() === day) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidDate(2026, 10, 26));
console.log(isValidDate(2026, 2, 30));
console.log(isValidDate(2024, 2, 29));
console.log(isValidDate(2026, 13, 10));


/*
	10. //-[A múlt]-//
	Írj egy isExpire(date) függvényt, ami tru értékkel tér vissza, ha lejárt a bemenetként kapott dátumidő.
*/

function isExpire(date) {
    let megadottDatum = new Date(date);
    let most = new Date();

    if (megadottDatum < most) {
        return true;
    } else {
        return false;
    }
}

console.log(isExpire("2020-01-01T12:00:00"));
console.log(isExpire("2030-12-31T23:59:00"));
console.log(isExpire("2026-01-01T00:00:00"));