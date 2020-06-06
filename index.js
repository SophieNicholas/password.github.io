var generateBtn = document.querySelector("#generate");
var specialCharacters = "!@#$%^&*()";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function has a goal of finding the password and has prompts to tailor it 
function generatePassword() {

  var numbers = prompt("Please enter the number of characters you want for you new password, between 8 and 128");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  //
  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  

  // Generator functions
  var functionArray = [ 
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    function getUpperCases() {
      return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    function getSpecialCharacters() {
      return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
    }

  ];

  // Checks answers and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;
    alert(randomPasswordGenerated)

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray[1];
    minimumCount++;
    alert(randomPasswordGenerated)

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray[2];
    minimumCount++;
    alert(randomPasswordGenerated)

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray[3];
    minimumCount++;
    alert(randomPasswordGenerated)
  }

  // this is a string which has nothing in it so that it can be filled with charecters which are found in the loop below 
  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked]();
  }

  return randomPasswordGenerated;
}

