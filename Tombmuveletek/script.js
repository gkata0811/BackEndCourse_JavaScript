console.log("Tömbműveletek");


/*

    - egy dimenziós
    - többdimenziós 

    - két dimenziós tömbök - avagy mátrixok:
        matrix[sorIndex][oszlopIndex]
*/

let m = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
];

// indexeljók meg a 6-os érték helyét, az "m" mátrixban

console.log(
    m[1][2]
);

let pad = ["Kati", "Feri", "Teri", "Sári", "Piri", "Tomi"];

console.log( pad );

/*
    .push(p1, p2, ..., pN):number - a tömb végéhez fűz egy vagy több elemet (a paraméterlistáját)
        - visszatért a tömb új hosszával
    .pop():any - Kiemeli a tömb utolsó elemét (visszatér vele és ki is törli)

    .unshift(p1, p2, ..., pN) - a tömb elejéhez fűz egy vagy több elemet (a paraméterlistáját)
        - visszatért a tömb új hosszával
    .shift():any - kiemeli a tömb első elemét (visszatér a tömb első elemével, és azt ki istörli a tömbből)

    !!!Fontos: A shift és az unshift függvények újra indexelik a tömböt
*/

pad.push("Robi");

console.log( pad );

// Ültessük Kati mellé Erzsit

pad.unshift("Erzsi");
console.log( pad );

/*
    Feladat: Az új gyerekek (Kati és Robi) cseréljenek helyet
*/

let elso = pad.shift();
let utolso = pad.pop();

pad.push(elso);
pad.unshift(utolso);

console.log(pad);

/*

    .indexOf(keresettElem, ?startIndex):number - visszatér a "keresettElem" első előfordulásának indexével.
        - ha nincs találat, akkor -1 a visszatérési érték
    .lastIndexOf(keresettElem, ?startIndex):number - visszatér a "keresettElem" utolsó előfordulásának indexével.
        - ha nincs találat, akkor -1 a visszatérési érték

    .includes(keresettElem:number):boolean - true értékkel tér vissza, ja a "keresettElem" benne van a tömbben
    
    .slice(startIndex:number, ?endIndex:number):array - visszatér a tömb "startIndex" illetve "endIndex" közti szakaszával

    .splice(startIndex, deleteNumber, ?p1, ?p2, ..., ?pN):array - A startIndex-töröl deleteNumber darabszámú elemet,
        és opcionálisan, beszúr egy vagy több elemet
        - visszatér a törölt elemek tömbjével
*/

/*
    Feladat: Teri és Sári közé szeretnénk ültetni Palit.
*/

let sariIndex = pad.indexOf("Sári");

pad.splice(sariIndex, 0, "Pali");

console.log( pad );

/*
    .join(?separatorString):string - Sztringgé fűzi az elemeket, köztük a separatorString-el
        - separatorString, opcionális, default értéke a ","
*/

// Készítsünk egy szépen formázott listát join segítsaégével
console.log(
    pad.join(", ")
);

/*
    Fűzzük a padon ülő gyerekek névsorát egy HTML listába, majd jeleítsük ezt a HTML oldalon

    <ul><li>Robi</li><li>Kati</li><li>Feri</li></ul>

 */

document.querySelector("#content").innerHTML = `<ul><li>${pad.join("</li><li>")}</li></ul>`;

/*
    A tömbkezelő függvények magasabb rendű függvényei

    .forEach(function(item, ?itemIndex, ?array)) - lefuttatja a paraméterfüggvényét a tömb minden elemére.
*/

// iteráljunk végig a pad tömbön forEach segítségével

console.log("-----------------forEach pad------------------");
/*
function forEach(tomb, func){
    for (let i = 0; i < tomb.length; i++)
        func(tomb[i], i, tomb);
}
*/

pad.forEach(function(gyerek){
    console.log(gyerek);
});

/*
function map(tomb, func){
    let tmp = [];
    for (let i = 0; i < tomb.length; i++)
        tmp[i] = func(tomb[i], i, tomb);

    return tmp;
}
*/

/*
    .map(function(item, ?itemIndex, ?array):any) - a tömbök átalakítását teszi lehetővé.
*/

/*
	8. //-[Számbontás]-//
	Írj függvényt mely egy egy number érték tagjait visszatéríti egy tömbben
        pl: 256 esetén a visszatérési érték [2, 5, 6]
*/

// Megoldás hagyományosan
function szambontas(szam) {
    let szoveg = String(szam);
    let eredmeny = [];

    for (let i = 0; i < szoveg.length; i++) {
        eredmeny.push(Number(szoveg[i]));
    }

    return eredmeny;
}

//Megoldás .map segítségével
const szamok = num => String(num).split("").map(Number);

console.log(szamok(5698));

/*
    .find(function(item, ?itemIndex, ?array):boolean) - visszatér a tömb legelső olyan elemével, amelyre a 
        paraméterfüggvény true értékkel tér vissza.

    .findLast(function(item, ?itemIndex, ?array):boolean) - visszatér a tömb utolsó olyan elemével, amelyre a 
        paraméterfüggvény true értékkel tér vissza.
*/

/*
function find(tomb, func){
    for (let i = 0; i < tomb.length; i++)
        if (func(tomb[i], i, tomb))
            return tomb[i];

    return null;
}
*/

//Keressük meg az első "P" betűs gyereket

const p = pad.find(gyerek => gyerek[0] == "P");

console.log(p);


/*
    .filter(function(item, ?itemIndex, ?array):boolean):array - viszzatér a tömb összes elemével, amelyre a 
        paraméterfüggvény igazzal tér vissza
*/

/*
function filter(tomb, func){
    let tmp = [];
    for (let i = 0; i < tomb.length; i++)
        if (func(tomb[i], i, tomb))
            tmp.push(tomb[i])

    return tmp;
}
*/

console.log(
    pad.filter(gyerek => gyerek[0] == "P")
);

const gyerekek = [
    {
        id: 1,
        nev: "Kati",
        osztaly: 2,
        szuletesiDatum: "2019-06-09",
        neme: "f"
    },
    {
        id: 2,
        nev: "Feri",
        osztaly: 2,
        szuletesiDatum: "2018-11-25",
        neme: "m"
    },
    {
        id: 3,
        nev: "Gizi",
        osztaly: 3,
        szuletesiDatum: "2018-04-12",
        neme: "f"
    },
    {
        id: 4,
        nev: "Erzsi",
        osztaly: 3,
        szuletesiDatum: "2018-12-09",
        neme: "f"
    },
    {
        id: 5,
        nev: "Pali",
        osztaly: 2,
        szuletesiDatum: "2019-08-23",
        neme: "m"
    },
    {
        id: 6,
        nev: "Robi",
        osztaly: 3,
        szuletesiDatum: "2017-02-18",
        neme: "f"
    },
    {
        id: 7,
        nev: "Tomi",
        osztaly: 3,
        szuletesiDatum: "2018-03-03",
        neme: "m"
    },
    {
        id: 8,
        nev: "Piri",
        osztaly: 2,
        szuletesiDatum: "2019-09-23",
        neme: "f"
    },
    {
        id: 9,
        nev: "Rózsi",
        osztaly: 3,
        szuletesiDatum: "2017-02-20",
        neme: "f"
    },
    {
        id: 10,
        nev: "Zoli",
        osztaly: 2,
        szuletesiDatum: "2018-05-25",
        neme: "m"
    },
    {
        id: 11,
        nev: "Teri",
        osztaly: 2,
        szuletesiDatum: "2018-10-20",
        neme: "f"
    }
];

//Feladat, szűrjük ki a gyerekek közül a 2. osztályos lányokat.

console.log(
    gyerekek.filter(gyerek => gyerek.osztaly === 2 && gyerek.neme === "f")
);

//ha csak a névsor kell

console.log(
    gyerekek.filter(gyerek => gyerek.osztaly === 2 && gyerek.neme === "f").map(gyerek => gyerek.nev)
);

/*
    .every(function(item, ?itemIndex, ?array):boolean):boolean - true értékkel tér vissza, ha a paraméterfüggvény
        a tömb összes elemére true értékkel tér vissza.

    .some(function(item, ?itemIndex, ?array):boolean):boolean - true értékkel tér vissza,ha a paraméter függvény
        legalább a tömb egy elemére true értékkel tér vissza 
*/

//Nézzük meg, hogy minden gyerek 3. osztályos-e

console.log(
    gyerekek.every(gyerek => gyerek.osztaly === 3)
);

console.log(
    gyerekek.some(gyerek => gyerek.osztaly === 3)
);

/*
    .findIndex(function(item, ?itemIndex, ?array):boolean):number - viszzatér a tömb legelső olyan elemű indexével,
        amelyre a paraméterfüggvény igazzal tér vissza. Ha nem talált elemet, akkot -1 a visszatérési érték

        .findIndex(function(item, ?itemIndex, ?array):boolean):number - viszzatér a tömb utolsó olyan elemű indexével,
        amelyre a paraméterfüggvény igazzal tér vissza. Ha nem talált elemet, akkot -1 a visszatérési érték
*/

//Keressük meg a 9-es id-val rendelkező gyerek indexét.

const id9Index = gyerekek.findIndex(gyerek => gyerek.id === 9);

console.log(id9Index);


/*
    .reduce(function(accumulator, item, ?itemIndex, ?array), ?accumulatorInit):any - a tömb összes elemét felhasználva visszaad egy értéket
        -accumulatorInit: opcionális, default értéke a tömb első eleme
    function reduce(tomb, func, accuInit){
        let accumulator = accuInit || tomb[0];

        for (let i = !accuInit ? 1 : 0; i < tomb.length; i++)
            accumulator = func(accumulator, tomb[i], i, tomb);

        return accumulator;
    }
*/

let nums = [3, 4, 6, 78, 9, 23, 12, 134, 54];

let sum = nums.reduce((ossz, n) => ossz + n);

console.log(nums);
console.log(sum);

console.log(
    nums.reduce(((max, n) => n > max ? n : max))
);


/*
    Tömbök rendezése:

    .sort(?function(elem, nextElem):number )
        - függvény nélkül alapértelmezetten az angol ABC karakterei szerint rendezi a tömb elemeit
            - negatív szám (-1) - elem < nextElem
            - nulla (0) - elem === nextElem
            - pozitív (1) - elem > nextElem
*/

pad.unshift("Ákos", "Áron", "András", "Ödön");

console.log(pad);

console.log(pad.sort);

// számtömb rendezése növekvő sorrendben

console.log(
    nums.sort((a, b) => a - b)
);

// számtömb rendezése csökkenő sorrendben

console.log(
    nums.sort((a, b) => b - a)
);

/*
    .reverse() - megfordítja a tömb elemeinek a sorrendjét
*/

// rendezés magyar ABC szerint

console.log(
    pad.sort((a, b) => a.localeCompare(b))
);


/*
    Gyakorlat:

    rendezzük a gyerekek tömböt névsor szerint növekvő sorrendbeb
*/

console.log(
    gyerekek.sort((a, b) => a.nev.localeCompare(b.nev))
);

console.log(
    gyerekek.sort((a, b) => a.nev.localeCompare(b.nev)).map(gyerek => gyerek.nev)
);

// Feladat: rendezzük születési dátum szerint növekvő sorrendbe a gyerekeket.

console.log(
    gyerekek.sort( (a, b) => (new Date(b.szuletesiDatum)) - (new Date(a.szuletesiDatum)))
);
