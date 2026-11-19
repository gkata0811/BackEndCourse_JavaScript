/*
    Azonnal lefutó függvények
*/
let globalis = "Globalis ertek";
/*

(function(p){

    let belso = "Belső érték"; // Csak a függvény belésejében léátszik
    let globalis = "Ez nem a külső globális";

    console.log("Ez a függvény le is futott");
    console.log(belso);
    console.log(globalis);
    console.log(p); // így tudom használni a globális változót, ha ugyan olyan névvel én már létrehoztam egyet a függvényen belül
    

})(globalis);

*/

/*
const module = (function(){

    // privát interfész
    let belso = "belso";

    //publikus interfész
    return {
        kulcs: "ertek",
        getBelso: function(){
            return belso;
        }
    }
})();

console.log(
    module.getBelso()
);
*/

const textBox = (function(){

    const template = `
        <div class="text-box">
            <h2></h2>
            <h4></h4>
            <p></p>
        </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = template;

    const textBoxElement = div.firstElementChild;

    /**
     * Ez a függvény létrehoz egy szövegdobozt
     * @param {object} option - A paraméter leírása
     * @param {string} option.title
     * @param {string} option.subtitle
     * @param {string} option.text
     * @param {string} option.selector - CSS selector - Itt jelenik meg a szövegdoboz
     * 
     * @returns {HTMLElement} 
     */
    const create = (option) => {

        const parentElement = document.querySelector(option.selector);

        const element = textBoxElement.cloneNode(true);

        const titleElement = element.querySelector("h2");
        const subtitleElement = element.querySelector("h4");
        const textElement = element.querySelector("p");

        titleElement.textContent = option.title;
        subtitleElement.textContent = option.subtitle;
        textElement.textContent = option.text;

        parentElement.appendChild(element);

        return element;

    };

    return {
        create
    };

})();