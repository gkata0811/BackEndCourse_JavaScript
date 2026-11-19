console.log("OOP");

class Ember{

    lasttName;
    firstName;
    #age;   // privát változó

    /*
        A konstruktor akkor fut le, amikor létrehozunk az oszályból egy új példányt
        pl.: let ember = new Ember();
    */

    constructor(lastName, firstName, age){
        this.lasttName = lastName;
        this.firstName = firstName;
        this.#age = age;
    }

    bemutatkozas(){
        return `A nevem ${this.lasttName} ${this.firstName} és ${this.#age} éves vagyok.`;
    }
}

let ember1 = new Ember("Teszt", "Elek", 30);
let ember2 = new Ember("Gipsz", "Jakab", 28);