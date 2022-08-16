// Assignment code here
var fullCharacterList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9,"!","#","$","%","&","*","+",'-',"/",
"?","@","=","_"]
var upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z"]
var lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"]
var numberList = [0,1,2,3,4,5,6,7,8,9]
var symbolList = ["!","#","$","%","&","*","+",'-',"/","?","@","=","_"]
var passwordLength = 0
var newCharList = []
var listLength = 0
var passwordString = []

function lengthInput() {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter how many characters you would like you password." + "\n" +
    "Enter a number that is at least 8 and no more than 128")
  }
}

function inputUpperCase() {
  return confirm("Would you like to use upper case letters?")
}

function inputLowerCase() {
  return confirm("Would you like to use lower case letters?")
}

function inputnumber() {
  return confirm("Would you like to use numbers?")
}

function inputsymbol() {
  return confirm("Would you like to use symbols?")
}

function getRandom() {
  return Math.floor(Math.random() * listLength)
}

function createCharList() {
  if (inputUpperCase()) {
    newCharList = newCharList.concat(upperCaseList)
  }
  if (inputLowerCase()) {
    newCharList = newCharList.concat(lowerCaseList)
  }
  if (inputnumber()) {
    newCharList = newCharList.concat(numberList)
  }
  if (inputsymbol()) {
    newCharList = newCharList.concat(symbolList)
  }
}

function findListLength() {
  listLength = newCharList.length
}

function createPassword() {
  for (var i = 0; i < passwordLength; i++) {
    passwordString.push(newCharList[getRandom()])
  }
}
// password.shift()
function generatePassword() {
  lengthInput()
  createCharList()
  findListLength()
  createPassword()
  return passwordString.join("")
}
// console.log(passwordString.join(""))
// generatePassword()
// console.log(passwordSting)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
