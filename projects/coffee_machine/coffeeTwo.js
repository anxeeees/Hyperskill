const input = require('sync-input')

let waterInMachine = 400;
let milkInMachine = 540;
let beansInMachine = 120;
let cupsAvailable = 9;
let moneyInMachine = 550;

console.log(`The coffee machine has:
${waterInMachine} ml of water
${milkInMachine} ml of milk
${beansInMachine} g of coffee beans
${cupsAvailable} disposable cups
${moneyInMachine} of money`)

  console.log("Write action (buy, fill, take): ")


  let choice = input();


  if(choice === "buy") {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ")
    let coffeeChoice = input();

    if(coffeeChoice === "1") {
      waterInMachine - 250;
      beansInMachine - 16;
     milkInMachine + 4;
      cupsAvailable --;
    }
    else if(coffeeChoice == "2") {
     waterInMachine - 350;
      milkInMachine - 75;
      beansInMachine - 20;
     milkInMachine + 7;
     cupsAvailable --;
   }
    else {
     waterInMachine - 200;
      milkInMachine - 100;
     beansInMachine - 12;
     milkInMachine + 6;
     cupsAvailable --;
   }
  }


