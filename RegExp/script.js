console.log("reguláris kifejezések");

/*
    - Illeszkedési minták

    Példa ilyen mintára a hétköznapi életből:
    pl: dátum idő formátum:
        YYYY-MM-DD hh:mm:ss
*/

let menetrend = "A vonat 10:30-kor indul, és 14:25-kor érkezik meg."

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
    []
        - egy halmaz
        - egy olyan karakterre illeszkedik, amilyeneket a halmaz tartalmaz

    [a-z] - angol ABC kisbetűi
    [A-Z] - angol ABC nagybetűi
    [a-zA-Z] - angol ABC összes betűje
    [a-zA-ZöüóőúéáűÖÜÓÚÉÁŰ] - magyar ABC összes karaktere

    [^] - kizáró halmaz
       - egy olyan karakterre illeszkedik, ami nincs benne a halmazban

    [^a-z] - minden, ami nem az angol ABC kisbetűje
    [^\d\W] - minden olyan karakter, ami nem az angol ABC szerinti kis- és nagybetű és az alulvonás (vagyis speciális karakter)

    a|b - illeszkedik "a" vagy "b" karakterek valamelyikére
    . - egy bármilyen karakter


    Rövidítések -  reguláris kifejezések "escape" szekvenciái

    \d - digit - [0-9] - szám krarakterek
    \D - non-digit - [^0-9] - nem szám karakterek

    \w - word - az angol ABC szerinti betűkarakterek, és az alulvonás
    \W - non-word - minden, ami nem a \w

    \b - szó vége vagy eleje - egy olyan pont a string-ben, ami a szó elejét vagy végét jelenti, és mivel ez nem egy karakter, ezért nincs benne az eredményben
    \B - minden, ami nem szó vége vagy eleje

    \s - az üres karaktereket jelöli
    \S - minden, ami nem üres karakter


    ------------------------------------


    \. - egy pont karakter
    \\ - egy backslash karakter


    Mennyiségek

    n{x} - n x-szer ismétlődhet
    n{x,y} - n legkevesebb x-szer, és legtöbb y-szor ismétlődhet
    n{x, } - n legkevesebb x-szer, és legtöbb akárhányszor ismétlődhet

    n+ - n egyszer vagy akárhányszor ismétlődhet
    n* - n 0-szor vagy akárhányszor ismétlődhet
    n? - n 0-szor vagy egyszer ismétlődhet

    06 30 123 4567
    06 30 1234567
    06301234567


    Csoportosítás

    A csoportok alapvetően részeredményként is létrejönnek
    (n)
    (?:n) - nem jelenik meg részeredményként, de a teljes találatban benne van
*/

let s1 = "Pistike 2026-09-10-én ment szabadságra, és 2026-10-01-én jött haza.";

let datumok = s1.match(/\d{4}-\d{2}-\d{2}/g);

console.log(datumok);

let cssText = `
    #content {
        padding: 20px;
        color: #ab27d9;
        background-color: #FFF;
        margin-bottom: 30px;
    }
`

// Feladat: írjunk olyan reguláris kifejezést, ami a hexa színekre illeszkedik

let colors = cssText.match(/#[0-9a-f]{3,6}/gmi);

console.log(colors);


// Csoportok

console.log(
    s1.match(/\d{4}(?:-\d{2}){2}/)
);

/*
    Ha fel szeretnénk bontani az eredményt (például egy dátumot év, hónap, napra), akkor a megfelelő részeket csoportosítom, így részeredményként meg fognak jelenni az eredményben
*/

console.log(
    s1.match(/\d{4}-(\d{2})-(\d{2})/)
);

/*
    Nevesített csoportok
    (?<csoportNeve>)
*/

const d = s1.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log(d);


// Feladat: írju ki a d változó év értékét

console.log(d.groups.year);


/*
    Csoportok visszahelyettesítése

    egy csoport eredménye (amire a string-ben illeszkedett) visszahelyettesíthető (tehát a találat) a reguláris kifejezésbe a csoport sorszáma alapján, egy escape szekvenciában
*/

let s2 = "Pistike 2026-09-10-én ment szabadságra, és 2026.10.01-én jött haza.";

console.log(
    s2.match(/\d{4}(-|\.)\d{2}\1\d{2}/g)
);


let matches = s1.matchAll(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g);

console.group(matches);


let dates = [...matches];

console.log(dates);


// Feladat: címezzük meg a dates második találatának a hónap paraméterét

console.log(
    dates[1].groups.month
);