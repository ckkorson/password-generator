// Assignment code here
// created array to hold all uppercase letters
var upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z"]
// created array to hold all lowercase letters
var lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"]
// created array to hold all numbers
var numberList = [0,1,2,3,4,5,6,7,8,9]
// created array to hold all symbols
var symbolList = ["!","#","$","%","&","*","+",'-',"/","?","@","=","_"]
// variable to hold password length
var passwordLength = 0
// array to hold list of possible characters chosen by user input
var newCharList = []
// variable to record length of newCharList
var listLength = 0
// array to hold final password before it is passed to a string
var passwordArray = []
// ask user to input desired password length between 8 and 128
// while loop will run until user makes a valid input
function lengthInput() {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter how many characters you would like you password." + "\n" +
    "Enter a number that is at least 8 and no more than 128")
    if (isNaN(passwordLength)) {
      alert("Please enter a valid input")
      passwordLength = 0
    }
  }
}
// ask user if they would like to use uppercase letters
function inputUpperCase() {
  return confirm("Would you like to use upper case letters?")
}
// ask user if they would like to use lowercase letters
function inputLowerCase() {
  return confirm("Would you like to use lower case letters?")
}
// ask user if they would like to use numbers
function inputnumber() {
  return confirm("Would you like to use numbers?")
}
// ask user if they would like to use symbols
function inputsymbol() {
  return confirm("Would you like to use symbols?")
}
// creates newCharlist based on user input criteria
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
// finds length of newCharList array
function findListLength() {
  listLength = newCharList.length
}
// generates random number based of the length of newCharList
function getRandom() {
  return Math.floor(Math.random() * listLength)
}
// creates password as an array of characters
function createPasswordArray() {
  for (var i = 0; i < passwordLength; i++) {
    passwordArray.push(newCharList[getRandom()])
  }
}
// runs all functions to generate passwordArray and passes passwordArray as a string
function generatePassword() {
  passwordLength = 0
  passwordArray = []
  lengthInput()
  createCharList()
  findListLength()
  createPasswordArray()
  return passwordArray.join("")
}

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
