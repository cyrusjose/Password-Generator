// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declare variables
var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var withSpecial =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?()_+=-~`{}[];";
function generatePassword() {
  var warning = alert(
    "Please make sure you have at least 8 and no more than 128 characters."
  );
  // Ask user for password length;
  var strength = prompt("How many characters would you like in your password?");
  // Check to see if it is too short or too long
  if (strength < 8 && strength > 0) {
    alert("Your password would be too short.");
    window.location.reload();
  } else if (strength > 128) {
    alert("Your password would be too long.");
    window.location.reload();
  } else if (!strength) {
    window.location.reload();
  } else {
    var pwd = "";
    var specialChar = confirm(
      "Would you like special character in your password?"
    );
    if (specialChar) {
      for (var i = 0; i < strength; i++) {
        pwd += withSpecial.charAt(
          Math.floor(Math.random() * Math.floor(withSpecial.length - 1))
        );
      }
    } else {
      for (var i = 0; i < strength; i++) {
        pwd += alphaNum.charAt(
          Math.floor(Math.random() * Math.floor(alphaNum.length - 1))
        );
      }
    }
    return pwd;
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
