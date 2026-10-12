console.log("tömbműveletek");


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

let pad = ["Katai", "Feri", "Teri", "Sári", "Piri", "Tomi"];

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