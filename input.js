const readlineSync = require('readline-sync');

// Get name input
let name = readlineSync.question('Enter your name: ');

// Get age input and convert to number
let age = Number(readlineSync.question('Enter your age: '));

// Output the result
console.log(`Hello ${name}, you are ${age} years old!`);
