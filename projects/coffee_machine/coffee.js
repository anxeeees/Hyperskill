const input = require('sync-input')

// Define the amount of ingredients needed per cup
let waterNeeded = 200;
let milkNeeded = 50;
let beansNeeded = 15;

// Prompt the user for available ingredients
console.log("Write how many ml of water the coffee machine has:");
let water = Number(input());
console.log("Write how many ml of milk the coffee machine has:");
let milk = Number(input());
console.log("Write how many grams of coffee beans the coffee machine has:");
let beans = Number(input());
console.log("Write how many cups of coffee you will need:");
let cupsOfCoffee = Number(input());

check = false;

let maxCups = Math.min(
  Math.floor(water / waterNeeded),
  Math.floor(milk / milkNeeded),
  Math.floor(beans / beansNeeded)
);

// Check if the coffee machine can make the required number of cups
if (maxCups == cupsOfCoffee) {
    console.log("Yes, I can make that amount of coffee");
    check = true
} else if (maxCups < cupsOfCoffee){ // 2 < 10, i can only makae maxCups = 2
    console.log(`No, I can make only ${maxCups} cups of coffee`);
} else if (cupsOfCoffee < maxCups) { // 5 - 3 = 2
  console.log(`Yes, I can make that amount of coffee (and even ${maxCups - cupsOfCoffee} more than that)`);

}


//console.log(`For ${numberOfCups} cups of coffee you will need:
//${water * numberOfCups} ml of water
//${milk * numberOfCups} ml of milk
//${beans * numberOfCups} g of coffee beans`)


