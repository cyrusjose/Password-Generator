// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // Ask the user how many characters they would like to have.
  const numberOfChar = prompt("How many characters would you like to have?");
  // Declare a vriable for all the Alpha Numeric characters and store them. 
  let alphaNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // Declare the special character variable and store the array of special characters in the variable.
  let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];
  // Conditional for minimum of 8 characters 
  if (numberOfChar < 8 || numberOfChar > 128) {
    alert("Please make sure the length of your password is at least 8 characters and no more that 128 characters.");
    return "Please use more than 8 characters, but less than 129 characters.";
  } else {
    // Confirm with the user whether or not they want special characters.
    var specialCharQuestion = confirm("Would you like special characters in your password?");
  }
};
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
