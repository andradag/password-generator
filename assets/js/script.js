// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE

  //prompt choose password length

  const passwordLengthtext = prompt(
    "Please choose the length of the password between 8 and 128"
  );

  console.log(passwordLength);
  var passwordLength = parseInt(passwordLengthtext);

  if (passwordLength >= 8 && passwordLengthtext < 128) {
  } else {
  }

  let complexity = document.getElementById("slider").value;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
