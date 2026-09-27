console.log("Operátorok");

/*
    Operátorok
        - az operátorok műveleteket hajtanak végre
        - minden operátorral végzett műveletnek van eredménye, visszatérési értéke

        [operandus1] [operátor] [operandus2]
             12          +           25

    Aritmetikai operátorok
        - "+" összeadás
        - "-" kivonás
        - "*" szorzás
        - "/" osztás
        - "%" maradékos osztás
        - "**" hatványozás

    Összehasonlító operátorok : visszatérési értékük boolean (true/false)
        - "==" egyenlő
        - "===" szigorúan egyenlő - típust is vizsgál (nemcsak az értéknek, hanem a típusnak is azonosnak kell lennie)
        - "!=" nem egyenlő
        - "!==" szigorúan nem egyenlő - típust is vizsgál (nemcsak az értéknek, hanem a típusnak is különbözőnek kell lennie)
        - ">" nagyobb mint
        - "<" kisebb mint
        - ">=" nagyobb vagy egyenlő mint
        - "<=" kisebb vagy egyenlő mint

    Logikai operátorok : visszatérési értéke bármilyen lehet
        - "&&" logikai ÉS - akkor igaz, ha mindkét operandus igaz
        - "||" logikai VAGY - akkor igaz, ha legalább az egyik operandus igaz
        - "!" logikai NEM - az operandus ellentmondása, ennek a visszatérési értéke mindig boolean

    Hozzárendelő / értékadó operátorok
        - "=" értékadás - hozzárendeli a jobb oldalán lévő kifejezés értékét a bal oldalán lévő változóhoz
        - "+=" összeadás és értékadás - hozzáadja a jobb oldalán lévő kifejezés értékét a bal oldalán lévő változóhoz; pédlául: a += 5; ugyanaz, mint a = a + 5;
        - "-=" kivonás és értékadás - kivonja a jobb oldalán lévő kifejezés értékét a bal oldalán lévő változóhoz; például: a -= 5; ugyanaz, mint a = a - 5;
        - "*=" szorzás és értékadás - megszorozza a jobb oldalán lévő kifejezés értékét a bal oldalán lévő változóhoz; például: a *= 5; ugyanaz, mint a = a * 5;
        - "/=" osztás és értékadás - elosztja a jobb oldalán lévő kifejezés értékét a bal oldalán lévő változóhoz; például: a /= 5; ugyanaz, mint a = a / 5;
        - "%=" maradékos osztás és értékadás - kiszámolja a jobb oldalán lévő kifejezés értékének és a bal oldalán lévő változó értékének maradékát; például: a %= 5; ugyanaz, mint a = a % 5;
        - "**=" hatványozás és értékadás - kitevőként használja a jobb oldalán lévő kifejezés értékét, az alapul szolgáló számot pedig a bal oldalán lévő változó tartalmazza; például: a **= 5; ugyanaz, mint a = a ** 5;

    Léptető operátorok
        - "++" növelés - növeli az operandus értékét 1-gyel
        - "--" csökkentés - csökkenti az operandus értékét 1-gyel

    Feltételes operátor (conditional operator)
        feltétel ? igaz ág : hamis ág
*/