function solve(input){
    let peopleCount = Number(input[0]) ; 
    let moneyForTaxOnePerson = Number(input[1]);
    let moneyForLounger = Number(input[2]);
    let moneyForUmbrella = Number(input[3]);

    let taxEveryone = peopleCount * moneyForTaxOnePerson
    let loungerTotalMoney = Math.ceil(peopleCount * 0.75) * moneyForLounger
    let umbrellaTotalMoney = Math.ceil(peopleCount / 2) * moneyForUmbrella
    let totalMoney = taxEveryone + loungerTotalMoney + umbrellaTotalMoney
    console.log(`${(totalMoney).toFixed(2)} lv.`);

}
solve(["21",
"5.50",
"4.40",
"6.20"])
