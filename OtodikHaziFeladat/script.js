console.log("ötödik házi feladat");

console.log("ötödik házi feladat");

/*
	1. //-[Mondat]-//
	Írj függvényt, mely eldönti, hogy egy karakerlánc lehet-e mondat, vagy sem. 
        Egy karakterlánc akkor tekinhető mondatnak, ha nagy betűvel kezdődik, és ponttal végződik.
*/

function mondat(szoveg) {
    let regex = /^[A-ZÁÉÍÓÖŐÚÜŰ].*\.$/;

    return regex.test(szoveg);
}

console.log(mondat("Ez egy mondat."));
console.log(mondat("ez nem egy mondat."));
console.log(mondat("Ez sem egy mondat"));
console.log(mondat("A kutya alszik."));


/*
	2. //-[Tömb összeg]-//
	Írjatok egy "osszeg" nevű függvényt, mely bemeneti paraméterként megkap egy tömböt, mely számokkal van feltöltve, és 
       kimenetként visszaadja, a tömb elemeinek az összegét.
*/

function osszeg(tomb) {
    let eredmeny = 0;

    for (let i = 0; i < tomb.length; i++) {
        eredmeny += tomb[i];
    }

    return eredmeny;
}

console.log(osszeg([1, 2, 3, 4, 5]));
console.log(osszeg([10, 20, 30]));
console.log(osszeg([5, 15, 25, 35]));


/*
	3. //-[Fibonacci]-//
	Írjatok egy "fibonacci" nevezetű függvényt, mely előállítja a fobonacci sorozat első n elemét. ("n" a függvény bemeneti értéke)
       A fibonacci első eleme 0, míg a második 1. A többi az előző kettőnek az összege.
*/

function fibonacci(n) {
    let sorozat = [];

    if (n >= 1) {
        sorozat.push(0);
    }

    if (n >= 2) {
        sorozat.push(1);
    }

    for (let i = 2; i < n; i++) {
        let kovetkezo = sorozat[i - 1] + sorozat[i - 2];

        sorozat.push(kovetkezo);
    }

    return sorozat;
}

console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(1));


/*
	4. //-[elől hátul, 1-e?]-//
	Írj JavaScript függvényt annak ellenőrzésére, hogy egy adott egész számok tömbjének első vagy utolsó pozíciójában 1 szerepel-e. 
    A tömb hosszának nagyobbnak vagy egyenlőnek kell lennie 1-nél.
*/

function elolHatul(tomb) {
    if (tomb.length < 1) {
        return false;
    }

    if (tomb[0] === 1 || tomb[tomb.length - 1] === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(elolHatul([1, 2, 3, 4]));
console.log(elolHatul([2, 3, 4, 1]));
console.log(elolHatul([2, 3, 4, 5]));
console.log(elolHatul([1]));


/*
	5. //-[Helycsere index alapján]-//
	Írj függvényt, mely 2 megadott index alapján felcserél 2 elemet egy tömbben. trur értékkel térjen vissza, amennyiben sikeres volt a helycsere. A helycsere, akkor sikertelen, ha a valamelyik index, nem létezik a tömbben.
*/

function helycsere(tomb, index1, index2) {
    if (!Number.isInteger(index1) || !Number.isInteger(index2) ||
        index1 < 0 || index2 < 0 ||
        index1 >= tomb.length || index2 >= tomb.length) {
        return false;
    }

    let ideiglenes = tomb[index1];

    tomb[index1] = tomb[index2];
    tomb[index2] = ideiglenes;

    return true;
}

let szamok = [10, 20, 30, 40, 50];

console.log(helycsere(szamok, 1, 3));
console.log(szamok);

console.log(helycsere(szamok, 1, 10));
console.log(szamok);


/*
	6. //-[Max keresés]-//
	Írj függvényt, amely megkeresi egy tömb legnagyobb elemnét
*/

function maximum(tomb) {
    if (tomb.length === 0) {
        return null;
    }

    let legnagyobb = tomb[0];

    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i] > legnagyobb) {
            legnagyobb = tomb[i];
        }
    }

    return legnagyobb;
}

console.log(maximum([5, 12, 3, 25, 8]));
console.log(maximum([100, 50, 200, 150]));
console.log(maximum([-10, -5, -20, -1]));


/*
	7. //-[Balra forgat]-//
	Írj függvényt, mely paraméterként megkap egy tömböt amit, aztán balra forgat, egy megadott számszor.
*/

function balraForgat(tomb, db) {
    if (tomb.length === 0) {
        return tomb;
    }

    for (let i = 0; i < db; i++) {
        let elso = tomb.shift();

        tomb.push(elso);
    }

    return tomb;
}

console.log(balraForgat([1, 2, 3, 4, 5], 1));
console.log(balraForgat([1, 2, 3, 4, 5], 2));
console.log(balraForgat([10, 20, 30, 40], 3));


/*
	8. //-[Számbontás]-//
	Írj függvényt mely egy egy number érték tagjait visszatéríti egy tömbben
        pl: 256 esetén a visszatérési érték [2, 5, 6]
*/

function szambontas(szam) {
    let szoveg = String(szam);
    let eredmeny = [];

    for (let i = 0; i < szoveg.length; i++) {
        eredmeny.push(Number(szoveg[i]));
    }

    return eredmeny;
}

console.log(szambontas(256));
console.log(szambontas(12345));
console.log(szambontas(987));