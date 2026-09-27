console.log("Típuskonverzió");

/*
    Számkonverzió - amikor valamilyen típust számmá szeretnénk konvertálni

    - parseInt(string, ?szamrendszer: number)
        megpróbálja a string paraméterét egész számmá alakítani, amennyiben nem sikerül, akkor NaN-t ad vissza

    - parseFloat(string)
        megpróbálja a string paraméterét tizedes számmá alakítani, amennyiben nem sikerül, akkor NaN-t ad vissza

    - Number(param:any)
        bármilyen típusból megpróbál számot csinálni, amennyiben nem sikerül, akkor NaN-t ad vissza
*/


/*
    String konverzió - amikor valamilyen típust szöveggé szeretnénk konvertálni

    - String(param:any)
        string - bármilyen típusból megpróbál szöveget csinálni

    .toString() - az a metódus (függvény), amelyet bármilyen változóból meg lehet hívni, és visszaadja a string formáját az adott változónak
*/


/*
    Boolean (logikai) típuskonverzió

    - Boolean(param:any)
        boolean - megmutatja a paramétere logikai alapját
        azokat az értékeket, amelyeket false-ként értékel, hamiskásnak (falsy) nevezzük
        minden érték, ami nem hamiskás, az true-ként értékelődik ki

    - Falsy értékek:
        ""
        0
        false
        null
        undefined
        NaN
*/

console.log(
    'Boolean(false)',
    Boolean(false)
);

console.log(
    'Boolean("")', Boolean("")
);

console.log(
    'Boolean(0)', Boolean(0)
);

console.log(
    'Boolean(null)', Boolean(null)
);

console.log(
    'Boolean(undefined)', Boolean(undefined)
);

console.log(
    'Boolean(NaN)', Boolean(NaN)
);

console.log(
    'Boolean("false")', Boolean("false")
);