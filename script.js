var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+";


function generatePassword() {
  let passwordLength = prompt("how many characters? (8-128)");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128 plz");
    return;
  } else {
  var isLowerCase = confirm("Do you want lowercase letters?");
  var isUpperCase = confirm("Do you want uppercase letters?");
  var isNumbers = confirm("Do you want numbers?");
  var isSpecialCharacters = confirm("Do you want special characters?");

  var password = "";
  var characters = "";

  if (isLowerCase) {
    characters += lowerCase;
  }
  if (isUpperCase) {
    characters += upperCase;
  }
  if (isNumbers) {
    characters += numbers;
  }
  if (isSpecialCharacters) {
    characters += specialCharacters;
  }

  if (characters === "") {
    alert("Please select at least one character type");
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;

  }
}



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
