// Please don't modify the code below.
const string = input;
// Write your code below this line.
console.log(input.split(".", 4))


//Below you can see a string. Write a method inside the function that replaces all the instances of stun with stump.
function replaceString(data) {
  let replacedStr = data.replace(/stun/g, "stump");
  return replacedStr;
}
