// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%&*()/?<>=+";

var allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
  let password = "";
var userNumber = confirm("Would you like to include numbers in your password?");
if (userNumber == true) {
  password += number[Math.floor(Math.random()* number.length)];
}

var userUpper = confirm("Would you like to include uppercase letters?");
if (userUpper == true) {
  password += upperCase[Math.floor(Math.random()* upperCase.length)];
}

var userLower = confirm("Would you like to include lower case letters?");
if (userLower == true) {
  password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
}

var userSymbol = confirm("Would you like to include special characters?");
if (userSymbol == true) {
  password += symbol[Math.floor(Math.random()* symbol.length)];
}

var userInput = prompt("Choose a number between 8 through 128 for the password length.");
if (userInput < 8 || userInput > 128) {
  return alert("That is an invalid answer, please try again.");
} else {
  var length = userInput;
  
}

  password += allChars[Math.floor(Math.random()* allChars.length)];

return(password);
}