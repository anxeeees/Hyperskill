const input = require('sync-input');

let waterInMachine = 400;
let milkInMachine = 540;
let beansInMachine = 120;
let cupsAvailable = 9;
let moneyInMachine = 550;


let shopOpen = true;

while(shopOpen) {
    console.log(`The coffee machine has:
${waterInMachine} ml of water
${milkInMachine} ml of milk
${beansInMachine} g of coffee beans
${cupsAvailable} disposable cups
${moneyInMachine} of money`);

    console.log("Write action (buy, fill, take): ");


    let choice = input();

    if (choice === "buy") {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
        let coffeeChoice = input();

        if (coffeeChoice === "1") {
            waterInMachine -= 250;
            beansInMachine -= 16;
            moneyInMachine += 4;
            cupsAvailable--;
        } else if (coffeeChoice === "2") {
            waterInMachine -= 350;
            milkInMachine -= 75;
            beansInMachine -= 20;
            moneyInMachine += 7;
            cupsAvailable--;
        } else {
            waterInMachine -= 200;
            milkInMachine -= 100;
            beansInMachine -= 12;
            moneyInMachine += 6;
            cupsAvailable--;
        }
    }
    else if (choice === "fill") {
        console.log("Write how many ml of water you want to add: ");
        let addWater = parseInt(input(), 10);
        waterInMachine += addWater;
        console.log("Write how many ml of milk you want to add: ");
        let addMilk = parseInt(input(), 10);
        milkInMachine += addMilk;
        console.log("Write how many grams of coffee beans you want to add: ");
        let addBeans = parseInt(input(), 10);
        beansInMachine += addBeans;
        console.log("Write how many disposable cups you want to add: ");
        let addCups = parseInt(input(), 10);
        cupsAvailable += addCups;
    }

    else if (choice === "take") {
        moneyInMachine = 0;
    }
}


