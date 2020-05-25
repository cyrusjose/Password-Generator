// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  const numberOfChar = prompt("How many characters would you like to have?");
  const alphaNum = "abcdefghijklmnopqrstuvwxyz1234567890";
  const specialChar = confirm("Would you like special characters in your password?");
};
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
