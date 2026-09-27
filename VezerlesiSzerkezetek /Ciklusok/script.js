console.log("ciklusok")

/*
    léptető (for) ciklusok:
    - akkor használjuk őket, amikor egy megadott számszor kell ismételnünk egy programrészt

        for
        for in
        for of

    for (inicializálás; feltétel; léptetés){
        // ciklusmag
    }

    - inicializálás: ciklusváltozó inicializálása (kezdő érték beállítása)
    - feltétel: a ciklus addig ismétel, amíg a feltétel igaz
    - léptetés: a ciklusváltozó léptetése

----------------------------------------------------------------------------------------

    feltételes (while) ciklusok:
    - akkor használjuk, amikor nem tudjuk meghatározni, hogy a ciklusmag hányszor ismétlődik

        while - elől tesztelő ciklus
        do while - hátul tesztelő ciklus; egyszer mindenképpen lefut

    while (feltétel){
        // ciklusmag
    }

    do {
        // ciklusmag
        while (feltétel)
    }
*/

/*
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
*/

for (let i = 1; i<=10; i++){
    console.log(i);
}

for (let i = 1; i<=10; i+= 2){
    console.log(i);
}

const content = document.querySelector("#content");
for (let i = 1; i <= 10; i++)
      content.innerHTML += `<div>${i}<sup>2</sup> = ${i * i}</div>`;


console.log("---------- for kosár ----------");


const kosar = ["Alma", "Körte", "Szilva", "Barack"];

for (let i = 0; i < kosar.length; i++){
    console.log(kosar[i]);
}


console.log("---------- for in kosár ----------");

/*
    'for in' esetén a ciklusváltozóba a tömb indexei, illetve object esetén a kulcsok kerülnek
*/


for (const i in kosar){
    console.log(kosar[i]);
}


console.log("---------- for in ember ----------");


let ember = {
    nev: "Teszt Elek",
    email: "elek@email.hu",
    eletkor: 30
};

for (const key in ember){
    console.log(key+":", ember[key]);
}


console.log("---------- for of kosár ----------");

/*
    'for of' esetén a ciklusváltozóba a tömb aktuális eleme kerül
    !!! Mivel a 'for of' index alapján határozza me az elemet, és mivel az object-eknek nincsenek indexei, ezért a 'for of' alkalmatlan object-ek iterációjára, arra kizárólag a 'for in' alkalmas
*/


for(const gyumolcs of kosar){
    console.log(gyumolcs);    
}


console.log("---------- while kosár ----------");


let i = 0;

while (i < kosar.length){
    console.log(kosar[i]);
    i++;
}


console.log("---------- do while kosár ----------");

i = 0;

do {
    console.log(kosar[i]);
    i++;
} while (i < kosar.length);