
console.log("Tizenegyedik házi feladat");


let content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);


let cim = document.createElement("h1");
cim.textContent = "JavaScript házi feladat";
content.appendChild(cim);


let alapStyle = document.createElement("style");

alapStyle.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
    }

    input, button, select {
        padding: 8px;
        margin: 5px;
    }

    button {
        cursor: pointer;
    }

    .feladat {
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 8px;
    }

    .alertHatter {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .alertAblak {
        background-color: white;
        color: black;
        padding: 25px;
        border-radius: 10px;
        text-align: center;
        min-width: 250px;
        max-width: 80%;
    }
`;

document.head.appendChild(alapStyle);


/*
    1. //-[Gondoltam egy számra]-//
    Készíts egy egyszerű tippelős játékot. A program generáljon egy véletlen számot 1 és 10 között. 
    Addig kérjünk be tippeket(számokat), amíg a tipp nem egyezik a "gondolt" (a program elején generált random) számmal. 
    Ha a játékos eltalálta, a program álljon le és írja ki: "Gratulálok! A számost sikerült 'x' lépésben kitalálnod.". 
    Az 'x' helyére generáljátok be, hogy hány tipp kellett a játékosnak a megfejtéshez.
    (Mivel már tudtok DOM-ot, ne promptal kérjétek be a számokat, hanem készítsetek hozzá egy felületet. 
    Alert helyett pedig használjátok a saját alert modulotokat. amit az előző feladatban oldottatok meg.)
*/


let jatekDiv = document.createElement("div");
jatekDiv.classList.add("feladat");
content.appendChild(jatekDiv);

let jatekCim = document.createElement("h2");
jatekCim.textContent = "1. Gondoltam egy számra";
jatekDiv.appendChild(jatekCim);

let jatekSzoveg = document.createElement("p");
jatekSzoveg.textContent = "Gondoltam egy számra 1 és 10 között. Találd ki!";
jatekDiv.appendChild(jatekSzoveg);


let tippInput = document.createElement("input");
tippInput.type = "number";
tippInput.min = 1;
tippInput.max = 10;
tippInput.placeholder = "Tipped";
jatekDiv.appendChild(tippInput);


let tippButton = document.createElement("button");
tippButton.textContent = "Tippelés";
jatekDiv.appendChild(tippButton);


let tippEredmeny = document.createElement("p");
jatekDiv.appendChild(tippEredmeny);


let gondoltSzam = Math.floor(Math.random() * 10) + 1;

let tippekSzama = 0;
let jatekVege = false;


function tippeles() {

    if (jatekVege === true) {
        return;
    }

    if (tippInput.value === "") {
        tippEredmeny.textContent = "Adj meg egy számot!";
        return;
    }

    let tipp = Number(tippInput.value);

    if (tipp < 1 || tipp > 10 || !Number.isInteger(tipp)) {
        tippEredmeny.textContent = "1 és 10 közötti egész számot adj meg!";
        return;
    }

    tippekSzama++;

    if (tipp === gondoltSzam) {

        jatekVege = true;

        tippEredmeny.textContent = "Eltaláltad!";

        tippInput.disabled = true;
        tippButton.disabled = true;

        myAlert(
            "Gratulálok! A számot sikerült " +
            tippekSzama +
            " lépésben kitalálnod."
        );

    } else if (tipp < gondoltSzam) {

        tippEredmeny.textContent = "Nagyobb számra gondoltam!";

    } else {

        tippEredmeny.textContent = "Kisebb számra gondoltam!";

    }

    tippInput.value = "";
}


tippButton.addEventListener("click", tippeles);


tippInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        tippeles();
    }

});


/*
    2. //-[Napkereső]-//
    Írj függvényt, mely megkap egy dátumot, és megmondja, hogy az a hét mely napjára esik. (Ezzel megtudhatod, hogy milyen napon születtél, ha nem tudod :) )
*/

function napKereso(datum) {

    let adottDatum = new Date(datum + "T12:00:00");

    if (isNaN(adottDatum.getTime())) {
        return "Érvénytelen dátum!";
    }

    let napok = [
        "Vasárnap",
        "Hétfő",
        "Kedd",
        "Szerda",
        "Csütörtök",
        "Péntek",
        "Szombat"
    ];

    let napIndex = adottDatum.getDay();

    return napok[napIndex];
}

console.log(napKereso("2026-11-20"));
console.log(napKereso("2000-01-01"));
console.log(napKereso("2024-12-25"));


let napDiv = document.createElement("div");
napDiv.classList.add("feladat");
content.appendChild(napDiv);

let napCim = document.createElement("h2");
napCim.textContent = "2. Napkereső";
napDiv.appendChild(napCim);

let napInput = document.createElement("input");
napInput.type = "date";
napDiv.appendChild(napInput);

let napButton = document.createElement("button");
napButton.textContent = "Nap keresése";
napDiv.appendChild(napButton);

let napEredmeny = document.createElement("p");
napDiv.appendChild(napEredmeny);


napButton.addEventListener("click", function() {

    if (napInput.value === "") {
        napEredmeny.textContent = "Válassz egy dátumot!";
        return;
    }

    napEredmeny.textContent = napKereso(napInput.value);

});


/*
    3. //-[Rendszerező]-//
    Tegyük fel, hogy elkezdesz egy tanfolyamot, mely például hétfőn, és szerdán van. Tudod a kezdeti időpontot és a lejárati időpontot, és kiváncsi vagy, hogy mely dátumokon vagy foglalt.
    Ekkor írsz egy Javascript függvényt, mely megkap egy dátumintervallumot, és egy tömben a hét azon napjait, amelyeknek dátumaira kiváncsiak vagyunk az adott intervallumban.
    filterDatesByDay(startDate, endDate, weekdays):array[Date] A kimenet egy tömb, a meghatározott napok dátumaivel.
*/

function filterDatesByDay(startDate, endDate, weekdays) {

    let kezdet = new Date(startDate + "T12:00:00");
    let vege = new Date(endDate + "T12:00:00");

    let eredmeny = [];

    if (isNaN(kezdet.getTime()) || isNaN(vege.getTime())) {
        return eredmeny;
    }

    for (let datum = new Date(kezdet); datum <= vege; datum.setDate(datum.getDate() + 1)) {

        let nap = datum.getDay();

        if (weekdays.includes(nap)) {

            eredmeny.push(new Date(datum));

        }

    }

    return eredmeny;
}


let tanfolyamNapok = filterDatesByDay(
    "2026-11-01",
    "2026-11-30",
    [1, 3]
);

console.log(tanfolyamNapok);


for (let i = 0; i < tanfolyamNapok.length; i++) {

    console.log(tanfolyamNapok[i].toLocaleDateString("hu-HU"));

}


let rendszerDiv = document.createElement("div");
rendszerDiv.classList.add("feladat");
content.appendChild(rendszerDiv);

let rendszerCim = document.createElement("h2");
rendszerCim.textContent = "3. Rendszerező";
rendszerDiv.appendChild(rendszerCim);

let rendszerSzoveg = document.createElement("p");
rendszerSzoveg.textContent = "Hétfői és szerdai tanfolyami napok keresése.";
rendszerDiv.appendChild(rendszerSzoveg);


let kezdetInput = document.createElement("input");
kezdetInput.type = "date";
kezdetInput.value = "2026-11-01";
rendszerDiv.appendChild(kezdetInput);


let vegeInput = document.createElement("input");
vegeInput.type = "date";
vegeInput.value = "2026-11-30";
rendszerDiv.appendChild(vegeInput);


let rendszerButton = document.createElement("button");
rendszerButton.textContent = "Dátumok keresése";
rendszerDiv.appendChild(rendszerButton);


let rendszerLista = document.createElement("ul");
rendszerDiv.appendChild(rendszerLista);


rendszerButton.addEventListener("click", function() {

    rendszerLista.innerHTML = "";

    if (kezdetInput.value === "" || vegeInput.value === "") {
        return;
    }

    let datumok = filterDatesByDay(
        kezdetInput.value,
        vegeInput.value,
        [1, 3]
    );

    for (let i = 0; i < datumok.length; i++) {

        let li = document.createElement("li");

        li.textContent =
            datumok[i].toLocaleDateString("hu-HU") +
            " - " +
            napKereso(
                datumok[i].getFullYear() + "-" +
                String(datumok[i].getMonth() + 1).padStart(2, "0") + "-" +
                String(datumok[i].getDate()).padStart(2, "0")
            );

        rendszerLista.appendChild(li);

    }

});


/*
    4. //-[Alert]-//
    Készítsetek egy saját Alert ablakot, mely a képernyő közepén jelenik meg mindig és megmutat egy üzenetet. myAlert("Üzenet szövege") Továbbá tartalmazzon egy OK gombot, melyre klikkelve eltűnik az ablak. Amíg az ablak a képernyőn van, a tartalmat takarja el egy félig áttetsző div.
*/

function myAlert(uzenet) {


    let hatter = document.createElement("div");
    hatter.classList.add("alertHatter");


    let ablak = document.createElement("div");
    ablak.classList.add("alertAblak");


    let szoveg = document.createElement("p");
    szoveg.textContent = uzenet;

    ablak.appendChild(szoveg);


    let okButton = document.createElement("button");
    okButton.textContent = "OK";

    ablak.appendChild(okButton);


    hatter.appendChild(ablak);

    document.body.appendChild(hatter);


    okButton.addEventListener("click", function() {

        hatter.remove();

    });

}


let alertDiv = document.createElement("div");
alertDiv.classList.add("feladat");
content.appendChild(alertDiv);

let alertCim = document.createElement("h2");
alertCim.textContent = "4. Saját Alert";
alertDiv.appendChild(alertCim);

let alertButton = document.createElement("button");
alertButton.textContent = "Alert megnyitása";
alertDiv.appendChild(alertButton);

alertButton.addEventListener("click", function() {

    myAlert("Ez egy saját készítésű Alert ablak!");

});


/*
    5. //-[Témaváltó]-//
    Készíts két css fájlt egy kis HTML oldalhoz, emlyek ugyanannak a HTML oldalnak 2 stílusát határozzák meg. Hozz létre egy HTML Select-et, a választható 2 stílussal. Majd dinamikusan töltsd be azt a CSS-t, amelyiket a kliens kiválasztott. Így dinamikusan meg tudod változtatni egy oldal stilusát, anélkül, hogy az oldalt újra kellene töltened.
*/


let vilagosCSS = `
    body {
        background-color: #ffffff;
        color: #222222;
    }

    .feladat {
        background-color: #eeeeee;
        border: 1px solid #cccccc;
    }

    button {
        background-color: #dddddd;
        color: black;
        border: 1px solid #999999;
        border-radius: 5px;
    }
`;

let sotetCSS = `
    body {
        background-color: #222222;
        color: #ffffff;
    }

    .feladat {
        background-color: #333333;
        border: 1px solid #777777;
    }

    button {
        background-color: #555555;
        color: white;
        border: 1px solid #aaaaaa;
        border-radius: 5px;
    }
`;


let vilagosBlob = new Blob([vilagosCSS], {type: "text/css"});
let sotetBlob = new Blob([sotetCSS], {type: "text/css"});

let vilagosURL = URL.createObjectURL(vilagosBlob);
let sotetURL = URL.createObjectURL(sotetBlob);


let temaLink = document.createElement("link");
temaLink.rel = "stylesheet";
temaLink.href = vilagosURL;

document.head.appendChild(temaLink);


let temaDiv = document.createElement("div");
temaDiv.classList.add("feladat");
content.appendChild(temaDiv);

let temaCim = document.createElement("h2");
temaCim.textContent = "5. Témaváltó";
temaDiv.appendChild(temaCim);

let temaSzoveg = document.createElement("p");
temaSzoveg.textContent = "Válassz világos vagy sötét témát!";
temaDiv.appendChild(temaSzoveg);


let temaSelect = document.createElement("select");
temaDiv.appendChild(temaSelect);


let vilagosOption = document.createElement("option");
vilagosOption.value = "vilagos";
vilagosOption.textContent = "Világos téma";
temaSelect.appendChild(vilagosOption);


let sotetOption = document.createElement("option");
sotetOption.value = "sotet";
sotetOption.textContent = "Sötét téma";
temaSelect.appendChild(sotetOption);


temaSelect.addEventListener("change", function() {

    if (temaSelect.value === "vilagos") {

        temaLink.href = vilagosURL;

    } else {

        temaLink.href = sotetURL;

    }

});