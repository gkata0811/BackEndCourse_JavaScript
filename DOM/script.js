console.log("DOM");

let sp1 = document.querySelector("#sp1");

// sp1.style.color = "blue";

/*
    Az összes szabványos HTML attribútumot közvetlenül el lehet érni a HTLMElement-en keresztül (DOM Object element), kivéve a CSS "class" attribútumot, mert a class egy, a JavaScript számára lefoglalt kulcszó, ezért a "className" tulajdonságon keresztül érhetjük el
    pl.: HTMLElement.id, vagy HTMLElement.src ... stb

    Ezzel a lehetőséggel nem csak lekérdezni, hanem beállítani is lehet az adott attribútumot
*/

// Adjunk hozzá a content-hez egy újabb p tag-et, egy random tartalommal

let content = document.querySelector("#content");

/*
Rossz módszer, mert úgy referenciák jönnek létre, így a régi referenciák már nincsenek a képernyőn

content.innerHTML += "<p>Ezt a tartalmat JavaScript segítségével hoztuk létre.</p>";
sp1.style.color = "green";
*/

/*
    HTML csomópontok dinamikus kezelése (létrehozása és törlése)

    document.createElement(tagName: string) - létrehozza a "tagName" HTMLElement-et
    document.createTextNode(text) - létrehoz egy szöveg csomópontot a "text" szöveggel
    HTMLElement.removeChild(childNode: nodeObject) - törli a childNode-ot, de csak akkor, ha az a HTMLElement közvetlen gyereke
    HTMLElement.remove() - törli a HTLMElement-et a DOM fából
*/

const p = document.createElement('p');
const text = document.createTextNode("Ezt a szöveget dinamikusan hoztuk létre JavaScript segítségével.");

p.appendChild(text);
content.appendChild(p);

const otherText = document.createTextNode(" Ez egy másik szöveg.");
p.appendChild(otherText);

sp1.style.color = "green";