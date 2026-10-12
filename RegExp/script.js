console.log("RegExp");

/*
    - Illeszkedési minták

    Példa ilyen mintára a hétköznapi életből:
    pl: Dátumidő formátum
        YYYY-MM-DD hh:mm:ss
*/


let menetrend = "A vonat 14:30-kor indul, és 14:25-kor érkezik meg.";

let idopontok = menetrend.match(/[0-9]{2}:[0-9]{2}/g);

console.log(
    idopontok
);

console.log(
    menetrend.match(/\d{2}:\d{2}/g)
);

console.log(
    menetrend.match(/\d\d:\d\d/g)
);


/*
    [] - egy halmaz 
        - egy olyan karakterre iulleszkedik, amilyeneket a halmaz tartalmaz
    [a-z] - Az Angol ABC kisbetűi
    [A-Z] - Az Angol ABC nagybetűi
    [a-zA-Z] - Az Angol ABC összes betűje
    [a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ] - A Magyar ABC összes karaktere

    [^] - kizáró halmaz
        - egy olyan karakterre illeszkedik, ami nem része a halmaznak
    
    [^a-z] - minden, ami nem az Angol ABC szerinti kisbetű
    [^\d\w] - minden olyan karakter, ami nem az Angol ABC szerinti ki és nagysbetű és az alulvonás


     a|b - illeszkedik "a" vagy "b" karakterek valamelyikére
    . - egy bármilyen karakter

    Rövidítések - A reguláris kifejezések "escape" szekvenciái

    \d - digit - [0-9] - egy szám karakter
    \D - non digit - [^0-9] - minden, ami nem szám karakter 

    \w - word - Az angol ABC szerinti betű karakterek és az _
    \W - minden, ami nem a \w

    \b - szó vége vagy eleje - egy olyan pont a stringben, ami a szó elejét vagy végét jelenti,
        és mivel ez nem egy karakter, ezért nincs is benne az eredménybe
    \B - minden, ami nem szó vége, vagy eleje

    \s - az üres karaktereket jelöli
    \S - minden, ami nem üres karakter

    ----------------------

    \. - a pont karakter
    \\ - egy "\" karakter

    Mennyiségek

    n{x} - n x-szer ismétlődhet
    n{x,y} - n legkevesebb x-szer, és legtöbb y-szor ismétlődhet
    n{x,} - n legkevesebb x-szer, és legtöbb akár hányszor ismétlődhet

    n+ - n egyszer vagy akárhányszor ismétlődhet
    n* - n 0 szor vagy akárhányszor ismétlődhet
    n? - n 0 szor vagy egyszer ismétlődhet

    Csoportosítás
        A csoportok alapvetően részeredményként is létrejönnek 
        (n) 
        (?:n) - n nem jelenik meg részeredményként (de a teljes illeszkedésben ott szerepel)

*/

let s1 = "Pistike 2026-09-10-én ment szabadségra és 2026-10-01-én jött haza.";

let datumok = s1.match(/\d{4}-\d{2}-\d{2}/g);

console.log(
    datumok
);

let cssText = `
    #content{
        padding: 20px;
        color: #ab27d9;
        background-color: #FFF;
        margin-bottom: 30px
    }
`;

// Feladat  írjunk olyan reguláris kifejezést, ami a hexa színekre illeszkedik

let colors = cssText.match(/#[a-f0-9]{3,6}/gim);

console.log(colors);

// Csoportok:

console.log(
    s1.match(/\d{4}(?:-\d{2}){2}/)
);

/*
    Ha fel szeretnénk bontani az eredményt (például egy dátumot év, hónap nap-ra) 
    Akkor a megfelelő részeket csoprtosítom, így részeredményként meg fognak jelenni az eredménybe
*/
console.log("-------------------Csoportok---------------------")
console.log(
    s1.match(/(\d{4})-(\d{2})-(\d{2})/)
);

/*
    nevesített csoportok
    (?<csoportNeve>)
*/

const d = s1.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log(d);

//gyakorlat: írjuk ki a d változó év értékét

console.log(d.groups.year);

/*
    Csoportok visszahelyettesítése:
        Egy csoport eredménye (amire a sztringben illeszkedett) visszahelettesíthető (tehát az eredmény)
        a reguláris kifejezésbe a csoport sorszáma alapjan, egy escape szekvenciában

*/

let s2 = "Pistike 2026-09-10-én ment 12-15 szabadségra és 2026.10.01-én jött haza.";

console.log(
    s2.match(/\d{4}(-|\.)\d{2}\1\d{2}/g)
);


let matches = s1.matchAll(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g);

console.log(matches);

let dates = [...matches];

console.log(dates);

// gyakorlat: címezzük meg a dates második találatának a hónap paraméterét

console.log(
    dates[1].groups.month
);

/*
    Lookaround groups - körbetekintő csoportok:

    (?<=n) Positive lookbehind - Illeszkedik minden olyan karakterláncra, amely n-el kezdődik
        és ahol n nem része az eredménynek

    (?=n) Positive lookahead - Illeszkedik minden olyan karakterláncra, amely n-el végződik
        és ahol n nem része az eredménynek

    (?<!n) - Negative lookbehind - Illeszkedik minden olyan karakterláncra, amely nem n-el kezdődik
        és ahol n nem része az eredménynek

    (?!n) - Negative lookahead - Illeszkedik minden olyan karakterláncra, amely nem n-el végződik
        és ahol n nem része az eredménynek
*/

console.log(
    s2.match(/(?<=\d{4}(-|\.))\d{2}\1\d{2}/g)
);

let tpl = `
    <div>
        <h4>Ez a cím</h4>
        <p>Ez legyen a szöveg</p>
    </div>
    <div>
        <h4>Ez is cím</h4>
        <p>Ez is legyen egy szöveg</p>
    </div>
`;

console.log(
    tpl.match(/(?<=<h4>).*(?=<\/h4>)/gmi)
);

/*
    Stringek átalakítása - .replace használatával.
*/

console.log(
    s2.replace(/(\d{4})-(\d{2})-(\d{2})/g, "$1.$2.$3")
);

/*
    Alakítsuk, az alábbi formátum szerint a dátumokat:
    DD/MM/YYYY
*/

console.log(
    s2.replace(/(\d{4})(-|\.)(\d{2})\2(\d{2})/g, "$4/$3/$1")
);

console.log(
    s2.replace(/(\d{2})(\d{2})(-|\.)(\d{2})\3(\d{2})/g, "$5/$4/$2")
);


/*
    validálás reguláris kifejezések segítségével.
*/

/*
    Addig olvassunk be dátumot (prompt segítségével) amíg egy helyes formátumot be nem írunk.
    Helytelen adat esetén, egy alert ablakba figyelmeztessük a felhasználót, hogy rosz adatot írt be, majd kérjük újra
    Ha sikerült, értesítsük a felhasználót a sikeres adatbevitelről.
*/


let dateRegExp = /^\d{4}(-|\.)\d{2}\1\d{2}$/;
let datum = "";
let valid = false;

do {
    datum = prompt("Add meg a dátumot:");
    valid = dateRegExp.test(datum);

    if (!valid)
        alert("Hibás adat, ismételd meg újra")

} while (!valid)

alert ("Sikeres adatbevitel: " + datum);
