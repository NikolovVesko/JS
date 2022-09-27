function solve(input){
    let index = 0
    let target = Number(input[index])
    index++
    let command = input[index]
    index+= 2
   
    let sumMoney = 0
    
    while (command != "closed") {
        let cutting = command
        
        let money = 0;
        let whatCutting = input[index-1]
        if (cutting === "haircut") {
           
            if (whatCutting === "mens") {
                money = 15

            } else if (whatCutting === "ladies") {
                money = 20
            } else if (whatCutting === "kids") {
                money = 10 
            }
            
        } else if(cutting === "color") {
            if (whatCutting === "touch up") {
                money = 20
            } else if (whatCutting === "full color"){
                money = 30
            }
            

        }
        sumMoney += money
      
       
        if (sumMoney >= target) {
            console.log(`You have reached your target for the day!`);
            break;}
        if(command === 'closed' && sumMoney < target) {
            console.log(`Target not reached! You need ${target - sumMoney}lv. more.`);
        } else if (command === 'closed' && sumMoney >= target) {
            console.log(`You have reached your target for the day!`);
        }
        command = input[index]
        index+=2
    }
    
    console.log(`Earned money: ${sumMoney}lv.`);
}
solve(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])
