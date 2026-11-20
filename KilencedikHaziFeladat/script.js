
console.log("JavaScript házi feladat");

let content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

let style = document.createElement("style");

style.textContent = `
    table {
        border-collapse: collapse;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    th, td {
        border: 1px solid black;
        padding: 8px;
    }

    input {
        margin: 5px;
        padding: 5px;
    }

    button {
        margin: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }

    .sakktabla {
        display: grid;
        margin: 10px 0 30px 0;
        width: max-content;
    }

    .sakkMezo {
        width: 40px;
        height: 40px;
    }

    .vilagos {
        background-color: white;
    }

    .sotet {
        background-color: gray;
    }

    .sakkSzam {
        width: 30px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sakkBetu {
        width: 40px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .uresMezo {
        width: 30px;
        height: 30px;
    }

    .szinesDoboz {
        width: 150px;
        height: 100px;
        border: 1px solid black;
        margin: 10px;
        display: inline-block;
    }
`;

document.head.appendChild(style);


/*
	1. //-[Táblázatfeltöltő]-//
	    A html oldalatokon készítsetek egy 3 mezőből álló űrlapot, és egy hozzáad gombot.
        A 3 űrlapmező a következők: Név, cím, telefonszám.
        A hozzáad gomb hatására a 3 mezőből hozzátok létre egy táblázat sorát (dom függvények segítségével)
        majd adjátok hozzá a html oldalatokon elhelyezett táblázathoz.
        (egyéni döntés, hogy table-tr-td, vagy div alapú táblázatot készítetek.)
*/

let tablaCim = document.createElement("h2");
tablaCim.textContent = "1. Táblázatfeltöltő";
content.appendChild(tablaCim);

let urlap = document.createElement("form");
content.appendChild(urlap);

let nevInput = document.createElement("input");
nevInput.type = "text";
nevInput.placeholder = "Név";
urlap.appendChild(nevInput);

let cimInput = document.createElement("input");
cimInput.type = "text";
cimInput.placeholder = "Cím";
urlap.appendChild(cimInput);

let telefonInput = document.createElement("input");
telefonInput.type = "tel";
telefonInput.placeholder = "Telefonszám";
urlap.appendChild(telefonInput);

let hozzaadButton = document.createElement("button");
hozzaadButton.textContent = "Hozzáad";
hozzaadButton.type = "submit";
urlap.appendChild(hozzaadButton);

let tabla = document.createElement("table");
content.appendChild(tabla);

let fejlec = document.createElement("tr");

let fejlecNev = document.createElement("th");
fejlecNev.textContent = "Név";
fejlec.appendChild(fejlecNev);

let fejlecCim = document.createElement("th");
fejlecCim.textContent = "Cím";
fejlec.appendChild(fejlecCim);

let fejlecTelefon = document.createElement("th");
fejlecTelefon.textContent = "Telefonszám";
fejlec.appendChild(fejlecTelefon);

tabla.appendChild(fejlec);

function sorHozzaadas() {

    let nev = nevInput.value.trim();
    let cim = cimInput.value.trim();
    let telefon = telefonInput.value.trim();

    if (nev === "" || cim === "" || telefon === "") {
        return;
    }

    let ujSor = document.createElement("tr");

    let nevCella = document.createElement("td");
    nevCella.textContent = nev;
    ujSor.appendChild(nevCella);

    let cimCella = document.createElement("td");
    cimCella.textContent = cim;
    ujSor.appendChild(cimCella);

    let telefonCella = document.createElement("td");
    telefonCella.textContent = telefon;
    ujSor.appendChild(telefonCella);

    tabla.appendChild(ujSor);

    nevInput.value = "";
    cimInput.value = "";
    telefonInput.value = "";
}

urlap.addEventListener("submit", function(event) {

    event.preventDefault();

    sorHozzaadas();

});


/*
	2. //-[Sakktábla]-//
	    Írjatok egy függvényt, mely legenerál egy sakktáblát, ami meg is jelenik a HTML oldalon.
        A sakktábla, n*n-es legyen, és divekből rakjátok össze. tehát ne csak 8x8-as táblát lehessen legenerálni a függvénnyel.
    a. Miután sikerült, készíts egy másolatot a függvényről, és csináld meg úgy is, hogy balodalt a sorszámozás,
       míg alul a betű"számozás" jelenjen meg.
*/

let sakkCim = document.createElement("h2");
sakkCim.textContent = "2. Sakktábla";
content.appendChild(sakkCim);

function sakkTabla(n) {

    let tabla = document.createElement("div");
    tabla.classList.add("sakktabla");

    tabla.style.gridTemplateColumns = "repeat(" + n + ", 40px)";

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            let mezo = document.createElement("div");
            mezo.classList.add("sakkMezo");

            if ((i + j) % 2 === 0) {
                mezo.classList.add("vilagos");
            } else {
                mezo.classList.add("sotet");
            }

            tabla.appendChild(mezo);
        }
    }

    return tabla;
}

let elsoSakkTabla = sakkTabla(8);
content.appendChild(elsoSakkTabla);

let masodikSakkTabla = sakkTabla(5);
content.appendChild(masodikSakkTabla);

function sakkTablaSzamozott(n) {

    let tabla = document.createElement("div");
    tabla.classList.add("sakktabla");

    tabla.style.gridTemplateColumns = "30px repeat(" + n + ", 40px)";

    for (let i = 0; i < n; i++) {

        let szam = document.createElement("div");
        szam.classList.add("sakkSzam");
        szam.textContent = n - i;
        tabla.appendChild(szam);

        for (let j = 0; j < n; j++) {

            let mezo = document.createElement("div");
            mezo.classList.add("sakkMezo");

            if ((i + j) % 2 === 0) {
                mezo.classList.add("vilagos");
            } else {
                mezo.classList.add("sotet");
            }

            tabla.appendChild(mezo);
        }
    }

    let ures = document.createElement("div");
    ures.classList.add("uresMezo");
    tabla.appendChild(ures);

    for (let i = 0; i < n; i++) {

        let betu = document.createElement("div");
        betu.classList.add("sakkBetu");

        betu.textContent = String.fromCharCode(65 + i);

        tabla.appendChild(betu);
    }

    return tabla;
}

let szamozottTabla = sakkTablaSzamozott(8);
content.appendChild(szamozottTabla);


/*
	3. //-[Véletlenszinező]-//
	    Írj függvényt, mely véletlenszerűen generál egy css rgb színkódot.
        És egy fill nevezetű függvényt, aminek átadunk egy selectort. A függvény a selectornak megfelelő elemet, az előző
        véleltelszín generátorral fesse ki.
*/

let szinCim = document.createElement("h2");
szinCim.textContent = "3. Véletlenszínező";
content.appendChild(szinCim);

function veletlenSzin() {

    let piros = Math.floor(Math.random() * 256);
    let zold = Math.floor(Math.random() * 256);
    let kek = Math.floor(Math.random() * 256);

    return "rgb(" + piros + ", " + zold + ", " + kek + ")";
}

console.log(veletlenSzin());

function fill(selector) {

    let elem = document.querySelector(selector);

    if (elem === null) {
        return;
    }

    elem.style.backgroundColor = veletlenSzin();
}

let doboz1 = document.createElement("div");
doboz1.classList.add("szinesDoboz");
doboz1.id = "doboz1";
content.appendChild(doboz1);

let doboz2 = document.createElement("div");
doboz2.classList.add("szinesDoboz");
doboz2.id = "doboz2";
content.appendChild(doboz2);

let doboz3 = document.createElement("div");
doboz3.classList.add("szinesDoboz");
doboz3.id = "doboz3";
content.appendChild(doboz3);

fill("#doboz1");
fill("#doboz2");
fill("#doboz3");

let szinButton = document.createElement("button");
szinButton.textContent = "Új színek";
content.appendChild(szinButton);

szinButton.addEventListener("click", function() {

    fill("#doboz1");
    fill("#doboz2");
    fill("#doboz3");

});

/*
	4. //-[Egyszerű számológép]-//
        Írjatok egy egyszerű számológép programot, mely két operandus között végzi el az alapműveleteket.
        A HTML oldalon készítsétek el az ürlapot, mely áll 2 input mezőből a két oprtandus számára.
        A 2 operandus mező közt egy select-option serzkezetet, melyben kliválaszthatjuk a négy alapművelet valamelyikét.
        Majd a második operandus mező után egy "=" gombot, melyre kattintva megmutatjuk a HTML oldalon az eredményt.
        A html szerkezet tehát a következő:
        [input, operandus1] [select, operátor] [input, operandus2] [buttun, =] [display tag]
*/

let szam1 = document.createElement("input");
szam1.type = "number";
szam1.placeholder = "Szám 1.";

let operator = document.createElement("select");

let muveletek = ["+","-","*","/"];

muveletek.forEach(muvelet=>{
    let option = document.createElement("option");
    option.textContent= muvelet;
    option.value = muvelet;
    operator.appendChild(option);
});

let szam2 = document.createElement("input");
szam2.type = "number";
szam2.placeholder = "Szám 2.";

let eredmenyButton = document.createElement("button");
eredmenyButton.textContent = "=";

let eredmeny = document.createElement("span");

document.querySelector(".szamologep").append(szam1,operator,szam2,eredmenyButton,eredmeny);

eredmenyButton.addEventListener('click',()=>{
    let a = Number(szam1.value);
    let b = Number(szam2.value);
    let muvelet = operator.value;
    let vegeredmeny;
    switch (muvelet) {
        case "+":
            vegeredmeny = a + b;
            break;
        case "-":
            vegeredmeny = a - b;
            break;
        case "*":
            vegeredmeny = a * b;
            break;
        case "/":
            vegeredmeny = a / b;
        break;
    }
    return eredmeny.textContent = vegeredmeny;
});