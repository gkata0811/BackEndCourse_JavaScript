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

/*
    .classList
        .add(className)
        .remove(className)
        .replace(className, className1)
        .contains(className):boolean - ha tartalmazza a className css-t, akkor true
        .toggle(className):boolean - ha bekapcsolta a className css-t, akkor true
            - ha kikapcsolta, akkor false
*/

/*
    Egy HTMLElement referenciái

    .childre - a HTMLElement HTMLELement gyerekei (csomópontjai)
    .childNodes - a HTMLElement HTMLELement, szöveg csomópontjai (gyrekei)

    .firstChilde - Első gyerek csomópont
    .firstElementChild - Első HTMLElement gyerek csomópont

    .lastChilde - Utolsó gyerek csomópont
    .lastElementChild - Utolsó HTMLElement gyerek csomópont

    .parentNode - Szülő csomópont
    .parentElement - Szülő HTMLElement csomópont

    .previousSibling - előző csomópont
    .previousElementSibling - előző HTMLElement csomópont

    .previousSibling - következő csomópont
    .previousElementSibling - következő HTMLElement csomópont
*/

/*
    Attribútumok kezelése:

    - Az összes szabványos HTML attribútumot el lehet érni közvetlenülk a HTMLElement-en keresztül
    HTMLElrmrnt.attributumNeve
    pl: HTMLElement.style

    Függvény alapu attribótum kezelés:

        .setAttribute(attrName, attrValue) - egy attribútum beállítása
        .getAttribute(attrName):string - visszaadja az attrName értékét, amennzyiben az be van állítva
        .removeAttribute(attrName) - törli az attrName attribútumot
        .hasAttribute(attrName):boolean - true értékkel tér vissza, amennyiben az attrName attrinútum be van állítva

        !!! Fontos: A függvények, úgy látját az attribútumokat, ahogy mi is a HTML kódban látjuk

    Saját attribútumok kezelése:
        A azz Attribute függvénycsalád segítségével, saját, egyedi attribútumokat is létre tudunk hozni (kezelni)


*/


/*
    HTMLELementek pozicionált beszúrása.

    .insertAdjacentElement(position:string. HTMLElement) - 
    .insertAdjacentText(position:string. TextNode:string) - 
    .insertAdjacentHTML(position:string. HTMLStr:string) - 

        position:
            - beforebegin - previousElementSibling / previousElement
            - afterbegin - firstElementChild / firstChild
            - biforeend - lastElementChild / lastChild
            - afterend - nextElementSibling / nextSibling

    <!-- beforebegin -->
    <div title="HTMLElement">
        <!-- afterbegin -->

        <span>Content</span>

        <!-- beforeend -->
    </div>
    <!-- afterend -->
*/

content.firstElementChild.nextElementSibling.insertAdjacentHTML("afterend", '<p>Hello</p>');
