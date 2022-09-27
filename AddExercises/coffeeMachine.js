function solve(input) {
    let drink = input[0];
    let sugar = input[1];
    let qty = Number(input[2]);
    let price = 0
    switch (drink) {
        case "Espresso":

            if (sugar === "Without") {
                price = qty * 0.90
                price = price * 0.65
                if (qty > 5) {
                    price = price * 0.75
                    if (price > 15) {
                        price = price * 0.80
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return;
                    }
                    console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                    return;
                }
                console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
            } else if (sugar === "Normal") {
                price = qty * 1
                if (qty > 5) {
                    price = price * 0.75
                    if (price > 15) {
                        price = price * 0.80
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return
                    }
                    console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                    return;
                }
            } else if (sugar === "Extra") {
                price = qty * 1.20
                if (qty > 5) {
                    price = price * 0.75
                    if (price > 15) {
                        price = price * 0.80
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return
                    }
                    console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                    return;
                }
            } break;

        case "Cappuccino":
            if (sugar === "Without") {
                price = qty * 1
                price = price * 0.65
                
                    if (price > 15) {
                        price = price * 0.80
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return;
                    }
                    console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                    return
                
            } else if (sugar === "Normal") {
                price = qty * 1.20
               
                    if (price > 15) {
                        price = price * 0.80
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return;
          
               
                }
                console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);


            } else if (sugar === "Extra") {
                price = qty * 1.60
               
                    if (price > 15) {
                        price = price * 0.80
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return;
                    }
                    console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                    return
               
                
            } break;
            case "Tea" :
                if (sugar === "Without") {
                    price = qty * 0.50
                    price = price * 0.65
                    if (qty > 5) {
                        price = price * 0.75
                       
                            console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                            return;
                        }
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return
                   
                   
                } else if (sugar === "Normal") {
                    price = qty * 0.60
                    
                        if (price > 15) {
                            price = price * 0.80
                            console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                            return;
                        }
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return
                   
    
    
                } else if (sugar === "Extra") {
                    price = qty * 0.70
                        if (price > 15) {
                            price = price * 0.80
                            console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                            return;
                        }
                        console.log(`You bought ${qty} cups of ${drink} for ${(price).toFixed(2)} lv.`);
                        return
                } break;
    }
}
solve(["Cappuccino",
"Normal",
"13"])
