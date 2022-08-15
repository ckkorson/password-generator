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
function lengthInput() {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter how many characters you would like you password." + "\n" +
    "Enter a number that is at least 8 and no more than 128")
  }
}
lengthInput()



function getRandom() {
  return Math.floor(Math.random() * 75)
}
var password = []
function writePassword2() {
  for (var i = 0; i < passwordLength; i++) {
    password.push(fullCharacterList[getRandom()])
  }
}
writePassword2()
// password.shift()
console.log(password.join(""))

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
