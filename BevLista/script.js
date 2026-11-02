console.log("Bevliszt");

let content = document.querySelector('#content');

let input = document.createElement('input');
input.type = "text"; 

content.appendChild(input);

let button = document.createElement('button');
button.textContent = "Hozzáad";

content.appendChild(button);


let list = document.createElement('ul');
content.appendChild(list);


// Termék hozzáadása a bevásárlólistához

function hozzaadas() {
    let termek = input.value.trim();

    if (termek === "") {
        return;
    }

    let li = document.createElement('li');
    li.textContent = termek;

    list.appendChild(li);

    // Kattintásra áthúzzuk a listaelemet
    // Ctrl + kattintásra kijelöljük szerkesztésre

    li.addEventListener('click', function(event) {

        if (event.ctrlKey) {

            let kijeloltElem = list.querySelector('.kijelolt');

            if (kijeloltElem !== null) {
                kijeloltElem.classList.remove('kijelolt');
                kijeloltElem.style.backgroundColor = "transparent";
            }

            li.classList.add('kijelolt');
            li.style.backgroundColor = "yellow";

            input.value = li.textContent;

        } else {

            li.classList.toggle('athuzott');

            if (li.classList.contains('athuzott')) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }

        }

    });

    input.value = "";
}

button.addEventListener('click', hozzaadas);


/*
	1. //-[Bevásárlólista]-//
	Fejlesszük tovább a Bevásárló lista applikációt, Készítsünk egy törlés funkcionalitást: 
    - Adjunk hozzá az applikációhoz egy törlés gombot (Ahogy a "Hozzáad" gombbal is tettük)
    - A gombra való kattintás hatására, töröljük a listából a kihúzott elemeket.
*/

// Törlés gomb létrehozása

let torlesButton = document.createElement('button');
torlesButton.textContent = "Törlés";

content.appendChild(torlesButton);


// Áthúzott listaelemek törlése

function torles() {

    let athuzottElemek = list.querySelectorAll('.athuzott');

    for (let i = 0; i < athuzottElemek.length; i++) {
        athuzottElemek[i].remove();
    }

}

torlesButton.addEventListener('click', torles);


/*
	2. //-[Bevásárlólista]-//
	Fejlesszük tovább a Bevásárló lista applikációt, Készítsünk egy szerkesztés funkcionalitást az alábbiak szerint. 
    - Egy lista elemen való Ctrl + Click kattintás hatására, jelöljük ki az elemet css hozzáadásának segítségével (hasonlóan, az áthúzáshoz)
      Azzal a különbséggel, hogy itt egyszerre csak egyet lehessen kijelölni.
    - A Kijelöléssel egyidejűleg, a listaelem szövegét tegyük fel az input mezőbe. 
    - Majd a Mentés gombra klikkelve, vagy az input mezőn való enter lenyomására írjuk felül a szerkesztendő listaelem szövegét azzal, ami az input mezőben van.
    - Felülírása után pedig vegyük le a kijelölést a szerkesztett elemről, ezzel jelezve, hogy a listaelem szerkesztése befejeződött.
*/

// Mentés gomb létrehozása

let mentesButton = document.createElement('button');
mentesButton.textContent = "Mentés";

content.appendChild(mentesButton);


// Kijelölt listaelem szerkesztése és mentése

function mentes() {

    let kijeloltElem = list.querySelector('.kijelolt');

    if (kijeloltElem === null) {
        return;
    }

    let ujSzoveg = input.value.trim();

    if (ujSzoveg === "") {
        return;
    }

    kijeloltElem.textContent = ujSzoveg;

    kijeloltElem.classList.remove('kijelolt');
    kijeloltElem.style.backgroundColor = "transparent";

    input.value = "";

}

mentesButton.addEventListener('click', mentes);


// Enter billentyű kezelése

input.addEventListener('keydown', function(event) {

    if (event.key === "Enter") {

        let kijeloltElem = list.querySelector('.kijelolt');

        if (kijeloltElem !== null) {
            mentes();
        } else {
            hozzaadas();
        }

    }

});
