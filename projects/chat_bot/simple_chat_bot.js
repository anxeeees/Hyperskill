console.log("Hello! My name is Aid.\nI was created in 2023.\nPlease, remind me your name.")

const input = require('readline-sync')
let name = input.question('')
console.log(`What a great name you have, ${name}!`);

console.log('Let me guess your age.\nEnter remainders of dividing your age by 3, 5 and 7.')
let remainder3 = input.question('')
let remainder5 = input.question('')
let remainder7 = input.question('')
let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105
console.log(`Your age is ${age}; that's a good time to start programming!`);
console.log("Now I will prove to you that I can count to any number you want.")

let number = input.question('')
let counter = 0;
do {
  console.log(counter + " !")
  counter++
} while(counter <= number)
  console.log("Completed, have a nice day!")

  console.log("Let's test your programming knowledge.\nWhy do we use methods?")

  correctAnswer = false
  
  do {
    console.log("1. To repeat a statement multiple times.\n2. To decompose a program into several small subroutines.")
    console.log("3. To determine the execution time of a program.\n4. To interrupt the execution of a program.")
    userAnswer = input.question('')
    if(userAnswer == 2) {
      console.log("Congratulations, have a nice day!")
      correctAnswer = true
    }
    else {
      console.log("Please, try again.")
    }

  } while(!correctAnswer)

