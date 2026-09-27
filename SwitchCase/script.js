console.log("switch");

/*
    Switch (valtozo){
        case ertek1:
            utasitasok 1
            break;
        case ertek2:
            utasitasok 2
            break;
        case ertek3:
            utasitasok 3
            break;
        
        default:
            // akkor fut le, amikor a válto értéke egyetlen case ágban sincs lekezelve
            break;
    }
*/

let weekDayNumber = Number(prompt("Add meg a hét egy napjának a sorszámát, és én megmondom, hogy az milyen nap."));

let weekDayString = " ";

switch (weekDayNumber){
    case 1:
        weekDayString = "Hétfő";
        break;
    case 2:
        weekDayString = "Kedd";
        break;
    case 3:
        weekDayString = "Szerda";
        break;
    case 4:
        weekDayString = "Csütörtök";
        break;
    case 5:
        weekDayString = "Péntek";
        break;
    case 6:
        weekDayString = "Szombat";
        break;
    case 7:
        weekDayString = "Vasárnap";
        break;
    default:
        weekDayString = "Nincs ilyen napja a hétnek.";
        break;
}

switch (weekDayNumber){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        weekDayString += " -> hétköznap";
        break;
    case 6:
    case 7:
        weekDayString += " -> hétvége";
        break;
}

alert(weekDayString);