
console.log("tizedik házi feladat");

let content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

let style = document.createElement("style");

style.textContent = `
    #negyzetTerulet {
        width: 500px;
        height: 300px;
        border: 2px solid black;
        position: relative;
        margin-top: 10px;
    }

    #negyzet {
        width: 50px;
        height: 50px;
        background-color: blue;
        position: absolute;
        top: 0;
        left: 0;
    }

    .kepkeret {
        border: 2px solid black;
        padding: 10px;
        margin: 10px;
        width: 300px;
        text-align: center;
    }

    .kepkeret img {
        width: 100%;
    }
`;

document.head.appendChild(style);

let cim = document.createElement("h1");
cim.textContent = "JavaScript házi feladat";
content.appendChild(cim);


/*
	1. //-[Képkeret]-//
	Írjatok egy modult, mely képdobozok előállítására alkalmas. Kapja meg egy kép elérési útját, és a kép szövegét. Ebből akét adatból állítson elő egy "képkeretet" hasonlóan, ahogy azt a textBoxal csináltuk.
*/

let kepkeretCim = document.createElement("h2");
kepkeretCim.textContent = "1. Képkeret";
content.appendChild(kepkeretCim);

let kepek = document.createElement("div");
kepek.id = "kepek";
content.appendChild(kepek);

let kepkeretModul = (function() {

    function kepkeret(kepUtvonal, kepSzoveg) {

        let keret = document.createElement("div");
        keret.classList.add("kepkeret");

        let kep = document.createElement("img");
        kep.src = kepUtvonal;
        kep.alt = kepSzoveg;

        let szoveg = document.createElement("p");
        szoveg.textContent = kepSzoveg;

        keret.appendChild(kep);
        keret.appendChild(szoveg);

        return keret;
    }

    return {
        kepkeret: kepkeret
    };

})();

let elsoKep = kepkeretModul.kepkeret(
    "https://picsum.photos/300/200",
    "Első kép"
);

kepek.appendChild(elsoKep);

let masodikKep = kepkeretModul.kepkeret(
    "https://picsum.photos/300/201",
    "Második kép"
);

kepek.appendChild(masodikKep);


/*
	2. //-[Titkos Adattár (Privát állapot szimulálása)]-//

	Cél: Megérteni, hogyan védhetünk meg adatokat a külvilágtól úgy, hogy azokat közvetlenül ne lehessen felülírni vagy elolvasni.
	Feladat:
	Írj egy createSecretStore(secretPassword, secretData) függvényt! A függvény térjen vissza egy olyan objektummal, ami két metódust tartalmaz:

    - read(password): Ha a megadott jelszó egyezik a secretPassword-del, adja vissza a secretData-t. Ha nem, térjen vissza a "Hibás jelszó!" üzenettel.
    - update(password, newData): Ha a jelszó helyes, írja felül a secretData értékét az új adatra, és jelezzen vissza a sikeres módosításról.

	Példa használat:

	const myStore = createSecretStore("jelszo", "Titkos adat");

	console.log(myStore.read("asd")); // "Hibás jelszó!"
	console.log(myStore.read("jelszo"));  // "Titkos adat"

	myStore.update("jelszo", "Új titkos adat");
	console.log(myStore.read("jelszo"));  // "Új titkos adat"
*/

function createSecretStore(secretPassword, secretData) {

    return {

        read: function(password) {

            if (password === secretPassword) {
                return secretData;
            } else {
                return "Hibás jelszó!";
            }

        },

        update: function(password, newData) {

            if (password === secretPassword) {
                secretData = newData;
                return "Sikeres módosítás!";
            } else {
                return "Hibás jelszó!";
            }

        }

    };

}

const myStore = createSecretStore("jelszo", "Titkos adat");

console.log(myStore.read("asd"));
console.log(myStore.read("jelszo"));

console.log(myStore.update("jelszo", "Új titkos adat"));

console.log(myStore.read("jelszo"));

console.log(myStore.update("rossz", "Másik adat"));
console.log(myStore.read("jelszo"));


/*
	3. //-[Színkód teszt]-//
	Írj egy függvényt, mely leteszteli, hogy a paramétere érvényes css színkód-e? A lehetséges színkódformák: #ffffff; #fff, rgb(255, 255, 255)
*/

function szinkodTeszt(szinkod) {

    let hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

    if (hex.test(szinkod)) {
        return true;
    }

    let rgb = /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/i;

    if (rgb.test(szinkod)) {

        let szamok = szinkod.match(/\d+/g);

        for (let i = 0; i < szamok.length; i++) {

            let szam = Number(szamok[i]);

            if (szam < 0 || szam > 255) {
                return false;
            }

        }

        return true;
    }

    return false;
}

console.log(szinkodTeszt("#ffffff"));
console.log(szinkodTeszt("#fff"));
console.log(szinkodTeszt("#123abc"));
console.log(szinkodTeszt("rgb(255, 255, 255)"));
console.log(szinkodTeszt("rgb(255, 0, 100)"));
console.log(szinkodTeszt("rgb(300, 255, 255)"));
console.log(szinkodTeszt("#ggg"));

/*
	4. //-[Mozgatás]-//
	Írj programot, mely billentyűzetről mozgat egy négyzetet a HTML oldalon.
*/

let mozgasCim = document.createElement("h2");
mozgasCim.textContent = "4. Mozgatás";
content.appendChild(mozgasCim);

let mozgasSzoveg = document.createElement("p");
mozgasSzoveg.textContent = "A négyzetet a nyílbillentyűkkel lehet mozgatni.";
content.appendChild(mozgasSzoveg);

let negyzetTerulet = document.createElement("div");
negyzetTerulet.id = "negyzetTerulet";
content.appendChild(negyzetTerulet);

let negyzet = document.createElement("div");
negyzet.id = "negyzet";
negyzetTerulet.appendChild(negyzet);

let x = 0;
let y = 0;

let lepes = 10;

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        x += lepes;
        event.preventDefault();
    }

    if (event.key === "ArrowLeft") {
        x -= lepes;
        event.preventDefault();
    }

    if (event.key === "ArrowDown") {
        y += lepes;
        event.preventDefault();
    }

    if (event.key === "ArrowUp") {
        y -= lepes;
        event.preventDefault();
    }

    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    let maxX = negyzetTerulet.clientWidth - negyzet.offsetWidth;
    let maxY = negyzetTerulet.clientHeight - negyzet.offsetHeight;

    if (x > maxX) {
        x = maxX;
    }

    if (y > maxY) {
        y = maxY;
    }

    negyzet.style.left = x + "px";
    negyzet.style.top = y + "px";

});


/*
	5. //-[Szigorúan növekvő, csökkenő]-//
	Írj függvényt annak ellenőrzésére, hogy egy adott egész számok tömbje szigorúan növekvő vagy csökkenő sorozatot képvisel-e.
*/

function novekvoCsokkeno(tomb) {

    if (tomb.length < 2) {
        return false;
    }

    let novekvo = true;
    let csokkeno = true;

    for (let i = 0; i < tomb.length - 1; i++) {

        if (tomb[i] >= tomb[i + 1]) {
            novekvo = false;
        }

        if (tomb[i] <= tomb[i + 1]) {
            csokkeno = false;
        }

    }

    return novekvo || csokkeno;
}

console.log(novekvoCsokkeno([1, 2, 3, 4, 5]));
console.log(novekvoCsokkeno([5, 4, 3, 2, 1]));
console.log(novekvoCsokkeno([1, 3, 2, 4, 5]));
console.log(novekvoCsokkeno([1, 2, 2, 3]));
console.log(novekvoCsokkeno([10, 8, 6, 4]));