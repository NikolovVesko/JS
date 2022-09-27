function solve(input){
    let city = input[0]
    let eqt = input[1]
    let vipStatement = input[2]
    let days = Number(input[3])
    let totalPrice = 0 ;
    let bull = true ;
    if (days < 1) {
        bull = false
        console.log("Days must be positive number!")
     } else if (days > 7 ) {
        days = days - 1
     }
     if (vipStatement != "yes" && vipStatement != "no") {
        bull = false
        console.log("invalid input!")

     }
    if (city === "Borovets" || city === "Bansko") {
        if (eqt === "withEquipment") {
            totalPrice = days * 100
            if (vipStatement === "yes") {
                totalPrice = days * (100 * 0.9)
            }
        } else if (eqt === "noEquipment") {
            totalPrice = days * 80
            if (vipStatement === "yes") {
                totalPrice = days * (80 * 0.95)
            }
        } else { bull = false
            console.log("Invalid input!")}
    } else if (city === "Varna" || city === "Burgas") {
        if (eqt === "withBreakfast") {
            totalPrice = days * 130
            if(vipStatement === "yes") {
                totalPrice = days * (130 * 0.88)
            }
        } else if (eqt === "noBreakfast") {
            totalPrice = days * 100
            if (vipStatement === "yes") {
                totalPrice = days * (100 * 0.93)
            }
        } else { bull = false
            console.log("Invalid input!")} 
    } else {bull = false
        console.log("Invalid input!")}

        if (bull === true) {
            console.log(`The price is ${(totalPrice).toFixed(2)}lv! Have a nice time!`);
}
}
solve(["Gabrovo",
"noBreakfast",
"no",
"8"])


