function solve(input){
    let index = 0 
    let target = Number(input[0]) ;
    index ++
    let command = input[index]
    index ++
    let coctail =  "" ;
    
    let sumPrice = 0
    let qty = 0
    let pricePerOrder = 0
    let price = 0
    

   
    while (command != "Party!" || target < sumPrice ) {
       
        qty = Number(input[index])
        index ++
        coctail = command
        price = Number(coctail.length)
        pricePerOrder = price * qty
    
        if (pricePerOrder % 2 === 0) {   
            coctail = command
            price = Number(coctail.length)
            pricePerOrder = price * qty ;
            sumPrice += pricePerOrder
         
            command = input[index]
            index ++
      
        } else {      price = Number(coctail.length) * 0.75
            coctail = command
            pricePerOrder = price * qty ;
            sumPrice += pricePerOrder
            command = input[index]
            index++
            continue;}
        if (sumPrice >= target) {
                console.log("Target acquired.");
                console.log(`Club income - ${sumPrice.toFixed(2)} leva.`);
                return ;
            }
    

    }
    console.log(`We need ${(target - sumPrice).toFixed(2)} leva more.`);
    console.log(`Club income - ${sumPrice.toFixed(2)} leva.`);
}
solve(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])
