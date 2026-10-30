console.log("DOM");

let sp1 = document.querySelector("#sp1");

sp1.style.color = "blue";

/*
    Az 0sszes szabványos HTML attribútumot közvetlenü el lehet érni a
    HTMLElementen (DOM Object element) keresztül. Kivéve a css "class" attribútomot, mert
    a calss, egy a javascript számára lefoglalt kulcsszó, ezért a "className" tulajdonságpn keresztűl érhetjük el. 
    pl: HTMLElement.id, vagy HTMElement.src... stb

    Ezzel a lehetőséggel nem csak lekérdezni, hanem beállítani is lehet az adott attribútumot.
*/

// Adjunk hozzá a content-hez egy újabb p teget, egy random tartalommal.

let content = document.querySelector("#content");

/*
    //Rossz módszer, mert új referenciák jönnek létre, így a régi referenciák, már nincsenek a képernyőn.
    content.innerHTML += `<p>Ezt a tartalmat Javascript segítségével hpztuk létre.</p>`;
    sp1.style.color = "green";

*/


/*
    HTML csomópontok dinamikus kezelése (létrehozása és törlése)

    document.createElement(tagName:string) - létrehozza a "tagName" HTMLElementet
    document.createTextNode(text) - létrehoz egy szövegcsomópontot a "text" szöveggel

    HTMLElement.removeChild(childNode:NodeObject) - Törli a childNode, de csak akkor, ha az a HTMLElement közvetlen gyereke.
    HTMLElement.remove() - törli a HTMLElement-et az DOM fából.
*/

const p = document.createElement('p');
const text = document.createTextNode("Ezt a szöveget dinamikusan hoztuk létre Javascript segítségével.");

p.appendChild(text);
content.appendChild(p);

const otherText = document.createTextNode(" Ez egy másik szöveg");
p.appendChild(otherText);

sp1.style.color = "green";
