function solve(input) {
    let budget = Number(input[0]);
    let nightCount = Number(input[1]);
    let moneyPerNight = Number(input[2]);
    let percentAdditionalSpend = Number(input[3]);

    let moneyForAllNights = nightCount * moneyPerNight
    let additionalSpend = budget * (percentAdditionalSpend / 100)
    let moneyPerNightWithDiscount = 0;
    let totalMoney = moneyForAllNights + additionalSpend
    if (nightCount > 7) {
        moneyPerNightWithDiscount = moneyPerNight * 0.95
        moneyPerNight = moneyPerNightWithDiscount
        moneyForAllNights = nightCount * moneyPerNight
        totalMoney = moneyForAllNights + additionalSpend
        if (budget>= totalMoney) {
            console.log(`Ivanovi will be left with ${(budget - totalMoney).toFixed(2)} leva after vacation.`)
        } else {
            console.log(`${(totalMoney - budget).toFixed(2)} leva needed.`);
        }
       
    } else {
        if (budget >= totalMoney){
            console.log(`Ivanovi will be left with ${(budget - totalMoney).toFixed(2)} leva after vacation.`);
        } else {
            console.log(`${(totalMoney - budget).toFixed(2)} leva needed.`);
        }
    }
    
}
solve(["500",
"7",
"66",
"15"])

