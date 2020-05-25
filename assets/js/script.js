// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declare variables
var alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var withSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?()_+=-~`{}[];";
// Ask user for password length;
var strength = prompt("How many characters would you like in your password?");
// Check to see if it is too short or too long
if (strength < 8) {
  alert("Your password would be too short.");
  window.location.reload();
} else if (strength > 128) {
  alert("Your password would be too long.");
  window.location.reload();
} else {
  var specialChar = confirm("Would you like special character in your password?")
}
// Write password to the #password input
function generatePassword() {
  var possiblePass = "";
  if (specialChar === true) {
    for (var i = 0; i <= strength; i++) {
      possiblePass = possiblePass + withSpecial.charAt(Math.floor(Math.random() * Math.floor(withSpecial.length - 1)));
    }
  }
}
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
