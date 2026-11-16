console.log("JSON");

/*

    https://www.json.org/json-hu.html

    Szerializáció: 
        - Az a folyamat, amely során a memóriában lévő adatot szöveges formává alakítjuk.
        JSON.stringify(data) - szerializálja a "data" adatot

    Deszerializáció: 
        - Az a folyamat, amely során a szövegesített (szerializált) adatot, memóriában tárolt
         formává alakítjuk.
        JSON.parse(stringifyData) - deszerializálja a "stringifyDate" adatot
*/

const person = {name: "John", age: 30};

// Javascript adat szövessé alakítása (szerializáció)
const personText = JSON.stringify(person);

console.log(person);
console.log(personText);