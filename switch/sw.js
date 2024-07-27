function languageInfo(language) {
  switch (language) {
    case "JavaScript":
      console.log("Begins on December 4, 1995");
      break;
    case "Java":
      console.log("Begins on May 23, 1995");
      break;
    case "PHP":
      console.log("Begins on June 8, 1995");
      break;
    default:
      console.log("Language not found"); // Optional: handle cases where the language is not listed
  }
}

function getSalary(value) {
  switch (value) {
    case "Bootstrap":
      console.log("$15 per hour");
      break;
    case "Chrome Extension":
      console.log("$20 per hour");
      break;
    case "React":
      console.log("$30 per hour");
      break;
    default:
      console.log("$25 per hour"); 
  }
}

function checkTheDate(value) {
  switch (true) {
    case value >= 1 && value <= 5:
      console.log("Yes, you should go to work");
      break;
    default:
      console.log("No, this is your well-deserved weekend!");
  }
}

const currency = "EUR";

switch (currency) {
  case "USD":
    console.log(71);
    break;
  case "EUR":
    console.log(87);
  case "CHF":
    console.log(81);
    break;
  default:
    console.log(100)
    break;
}

