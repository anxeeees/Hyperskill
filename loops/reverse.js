// Create a loop that will display in the console all numbers from 10 to 1 (in the reverse order).

let i;

for (i = 10; i >=1; i--) {
console.log(i)
}

//sum of numbers

let sum = 0;

for (i = 0; i <=100; i++) {
  sum+=i;
}
console.log(sum)

// Create an array which contains the following list of fruits: apple, orange, banana. Write a program that will display in the console these fruits line by line.

let fruit = ['apple', 'orange', 'banana']

for (i in fruit) {
  console.log(fruit[i])
}


// You are given an array of numbers called numbers. Write a cycle that logs even for each even number and odd for odd numbers. If the number is 0, the program must stop processing the numbers.

function checkEvenOrOdd(numbers) {
  // Iterate over each number in the array
  for (const number of numbers) {
      // Stop processing if the number is 0
      if (number === 0) {
          break;
      }

      // Check if the number is even or odd and print the result
      if (number % 2 === 0) {
          console.log("even");
      } else {
          console.log("odd");
      }
  }
}

// Find the first occurrence of number 5 in the given array and return its index. If the number is not found, return -1

function find5(numbers) {
  for (let index in numbers) {
    if (numbers[index] === 5) {
      return parseInt(index, 10); // Return the index of the number 5
    }
  }
  return -1;
}

