console.log("Változók");


/*
    Primitívek:
        - string - szöveg
        - number - szám
            - NaN - Not a Number - nem szám
        - boolean - logikai
        - null - üres érték
        - undefined - nincs érték
        - symbol - egyedi azonosító
        - bigint - nagy szám
        - null - null értéket vehet fel, sajnos a JavaScript egyik gyerekbetegségének köszönhetően a typeof object-ként értelmezi, ami egy összetett típus, a null pedig nem az


    "typeof" operátor - típus ellenőrzése
*/


// Szám

let n = 10; //number
let n1 = 3.5; //number


// szöveg

let s1 = "Ez 'egy' szöveg"; //string
let s2 = 'Ez is egy szöveg'; //string

// backTick string vagy template string
// több soros, és behelyettesíthető

let s3 = `
    <div>
        <span style="background-image: url('image/bg.png');">${s2}</span>
    </div>
`; //string

let igaz = true; //boolean
let hamis = false; //boolean

let valtozo; //undefined

/*
    Állandók
        a const kulcsszóval definiáljuk, és definíció után nem változtathatjuk meg az értékét
*/

const szam = 123;

// szam = 235; // hiba, nem lehet új értéket hozzárendelni

/*
    () - kerek
    [] - szögletes
    {} - kapcsos
*/


/*
    Változó nevének definiálására vonatkozó szabályok:
        Írott szabályok:
        - nem kezdődhet számmal, de tartalmazhat
        - nem tartalmazhat szóközt, speciális karaktereket, kivéve az "_" és a "$" jeleket
        - a változó nevének egyedinek kell lennie
        - a javascript érzékeny a kis- és nagybetűkre, ezért a 'user' és a 'User' két különböző változó
        - nem tartalmazhat javascript által lefoglalt kulcsszavakat, mint pl. "let", "var", "function", "return", stb.

        Íratlan szabályok:
        - a változó neve legyen beszédes, utaljon a változó tartalmára
        - a változó neve legyen rövid, de érthető
        - a változó neve legyen angol nyelvű
        - a változó neve legyen camelCase formátumú, azaz az első szó kisbetűvel kezdődik, a további szavak nagybetűvel kezdődnek
        - a változó neve ne tartalmazzon ékezetes karaktereket, hogy elkerüljük az eltérő karakter kódolási problémákat
*/


/*
    a javascriptet a nem típusos programozási nyelvek közé soroljuk, azaz a változók típusát nem kell megadni, a javascript automatikusan felismeri a változó típusát a változó értékének alapján
    - a változó típusát a benne lévő érték határozza meg
    - nincs változó típus nélkül
*/


let a = 12 // Number(prompt("Add meg 'A' értékét"));
let b = 2 // Number(prompt("Add meg 'B' értékét"));

// a = Number(a);
// b = Number(b);

let osszeg = a + b;

console.log (`${a} + ${b} = ${osszeg}`);

/*
    Összetett típusok:
        - object
            - array - tömb, sorszámozott típus
                - associative array - asszociatív tömb - kulcs-érték párok
                - sorszámozott tömb - indexelt tömb - 
            - function - függvény
            - object - objektum
        - class - osztály
*/

//            0   1   2   3  4
let szamok = [23, 4, 56, 78, 9]; //array

console.log(
    szamok[2]
); //56


/*
    Object
*/

let nev = "Teszt Elek";
let email = "elek@email.hu";
let eletkor = 30;

let ember = {
    nev: "Teszt Elek",
    email: "elek@email.hu",
    eletkor: 30
};

/*
    Adatok kiolvasása object-ből
*/

// olvassuk ki az "ember" e-mail címét

console.log(
    ember.email
);

console.log(
    ember["email"]
);

let key = "eletkor";

console.log(
    ember[key]
);

