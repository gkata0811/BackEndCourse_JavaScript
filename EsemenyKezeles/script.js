console.log("Listener");

const box1 = document.querySelector("#box1");

let count = 0;

box1.addEventListener('click', function(){
    count++;
    console.log(count);
});

box1.addEventListener('click', function(){
    console.log(box1);
});

box1.addEventListener('click', function(event){
    console.log(event);
});

/*
    Buborékolás vagy hullámeffektus:
        - Amikor a gyerek eseménye toább terjed a szülőkre, egészen a body-ig.
        - A gyerek eseménye kiváltja a szülők eseményét, egészen a bodyig
*/

box1.firstElementChild.addEventListener('click', function(event)  {
    event.stopPropagation(); //Buborékolás kikapcsolása
    console.log(this);
});
