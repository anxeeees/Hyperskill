const input = require('sync-input');

let waterInMachine = 400;
let milkInMachine = 540;
let beansInMachine = 120;
let cupsAvailable = 9;
let moneyInMachine = 550;

let espressoWater = 250;
let espressoBeans = 16;

let latteWater = 350;
let latteMilk = 75;
let latteBeans = 20;

let cappuccinoWater = 200;
let cappuccinoMilk = 100;
let cappuccinoBeans = 12;

function notEnoughWater(requiredWater) {
    return waterInMachine < requiredWater;
}

function notEnoughMilk(requiredMilk) {
    return milkInMachine < requiredMilk;
}

function notEnoughBeans(requiredBeans) {
    return beansInMachine < requiredBeans;
}

function notEnoughCups() {
    return cupsAvailable < 1;
}

let shopOpen = true;

while (shopOpen) {
    console.log("Write action (buy, fill, take, remaining, exit):");

    let choice = input();

    if (choice === "buy") {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
        let coffeeChoice = input();

        if (coffeeChoice === "1") {
            if (notEnoughWater(espressoWater) || notEnoughBeans(espressoBeans) || notEnoughCups()) {
                console.log("Sorry, not enough resources!");
            } else {
                console.log("I have enough resources, making you a coffee!");
                waterInMachine -= espressoWater;
                beansInMachine -= espressoBeans;
                moneyInMachine += 4;
                cupsAvailable--;
            }
        } else if (coffeeChoice === "2") {
            if (notEnoughWater(latteWater) || notEnoughMilk(latteMilk) || notEnoughBeans(latteBeans) || notEnoughCups()) {
                console.log("Sorry, not enough resources!");
            } else {
                console.log("I have enough resources, making you a coffee!");
                waterInMachine -= latteWater;
                milkInMachine -= latteMilk;
                beansInMachine -= latteBeans;
                moneyInMachine += 7;
                cupsAvailable--;
            }
        } else if (coffeeChoice === "3") {
            if (notEnoughWater(cappuccinoWater) || notEnoughMilk(cappuccinoMilk) || notEnoughBeans(cappuccinoBeans) || notEnoughCups()) {
                console.log("Sorry, not enough resources!");
            } else {
                console.log("I have enough resources, making you a coffee!");
                waterInMachine -= cappuccinoWater;
                milkInMachine -= cappuccinoMilk;
                beansInMachine -= cappuccinoBeans;
                moneyInMachine += 6;
                cupsAvailable--;
            }
        } else if (coffeeChoice === "back") {
            continue;
        }
    } else if (choice === "fill") {
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
    } else if (choice === "take") {
        console.log(`I gave you $${moneyInMachine}`);
        moneyInMachine = 0;
    } else if (choice === "remaining") {
        console.log(`The coffee machine has:
    ${waterInMachine} ml of water
    ${milkInMachine} ml of milk
    ${beansInMachine} g of coffee beans
    ${cupsAvailable} disposable cups
    ${moneyInMachine} of money`);
    } else
        shopOpen = false;
}