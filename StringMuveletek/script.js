console.log("string műveletek");

/*
    String-ek, avagy karakterláncok
    - A string-nek is van hossza
        .length
    - A string-ben az egyes karaktereket a sorszámuk alapján el tudjuk érni, mintha csak egy tömb lenne (egy karakter típusú tömb lenne)

    Escape szekvenciák
    - \n: new line
    - \t: vízszintes tabulátor
    - \v: függőleges tabulátor
    - \s: szóköz
    - \r: carriage return - kocsi vissza
    - \"": idézőjel
    - \\: visszaper jel
*/

let s = "Ez \\egy\n\t\"egyszerű\"\nszöveg";

console.log(s);


/*
    String-kezelő függvények
*/


let email = "   Teszt.Elek@email.hu "


/*
    .charAt(index) - visszaadja az "index" indexen álló karaktert
    .at(index) - visszaadja az "index" indexen álló karaktert, negatív indexeket is elfogad, a -5. hátulról 5-ik karakter
    .charCodeAt(index) - visszadja az "index" indexen lévő karakter kódját (ASCII-CODE)

    String.fromCharCode(code:number) - visszatér a "code" kódú karakterrel, mint string

    Tisztítsuk meg a fölösleges üres karakterektől az email változót, és állítsuk helyre a karaktereket.

    .trim() - eltávolítja az üres részeket a string elejéről és végéről
    .trimStart() - eltávolítja az üres részeket a string elejéről
    .trimEnd() - eltávolítja az üres részeket a string végéről

    .toUpperCase() - visszatér a hívó string csupa nagybetűs változatával
    .toLowerCase() - visszatér a hívó string csupa kisbetűs változatával
*/


console.log(email);

email = email.trim().toLowerCase();

console.log(email);


/*
    String keresés
    - .includes(searchString): boolean - true értékkel tér vissza, ha a searchString benne van a hívó string-ben
    - indexOf(searchString, ?startIndex): visszarér a keresett string (searchString) indexével (azzal az indexel, ahol a keresett string kezdődik)
        - ha a keresett string nincs a hívó string-ben, akkor -1 a visszatérési érték
        - a "startIndex" opcionális: ettől az indextől kezdve keres, ha nem adjuk meg, default értéke a 0
    - lastIndexOf(searchString ?startIndex): visszarér a keresett string (searchString) utolsó előfordulásának indexével
        - ha a keresett string nincs a hívó string-ben, akkor -1 a visszatérési érték
        - a "startIndex" opcionális: ettől az indextől kezdve keres, ha nem adjuk meg, default értéke a 0
*/


console.log(
    email.includes("@") ? "Az \"email \" lehet e-mail cím." : "Az \"email \" nem lehet e-mail cím."
);


/*
    Feladat: nézzük meg, hogy az "email" változóban az utolsó "." a "@"" mögött van-e
        Ha igen, erősítsük meg, hogy ez valóban lehet e-mail cím
        Ha nincs így, akkor jelenítsük meg, hogy ez nem lehet e-mail cím
*/


console.log(
    email.lastIndexOf("@") < email.lastIndexOf(".") ?
    "Az \"email \" lehet e-mail cím." :
    "Az \"email \" nem lehet e-mail cím."
);


/*
    .startsWith(searchString, ?startIndex): boolean - true értékkel tér vissza, ha a string a "searchString"-ben meghatározott szöveggel kezdődik
    - a "startIndex" opcionális: ettől az indextől kezdve keres, ha nem adjuk meg, default értéke a 0

    .endsWith(searchString, ?endIndex): boolean - true értékkel tér vissza, ha a string a "searchString"-ben meghatározott szöveggel végződik
    - a "endIndex" opcionális: ettől az indextől kezdve keres, ha nem adjuk meg, default értéke a 0
*/


/*
    String egy szakasza

    .slice(startIndex, endIndex) - visszatér a startIndex és az endIndex közti szakasszal
        - endIndex opcionális, default értéke .length - 1
 */


/*
    Keressük meg az e-mail "kiterjesztését"
*/


console.log(
    email.slice(email.lastIndexOf(".") + 1)
);


/*
    String-el darabolása

    .split(separator:string):array - feldarabolja a string-et egy string (separator) mentén, és visszatér egy tömbbel
*/


let path = "/site/pages/2026-05-12/site-name";

let pathcChunks = path.split("/");

console.log(pathcChunks);