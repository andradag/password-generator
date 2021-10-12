// Assignment Code
var generateBtn = document.querySelector("#generate");

//  make the acceptance functional

const getIsNumber = function () {
  const option = confirm("Do you want to include number ?");
  return option;
};

const getIsSpecialCharacter = function () {
  const option = confirm("Do you want to include special character ?");
  return option;
};

const getIsLowercase = function () {
  const option = confirm("Do you want to include lower case ?");
  return option;
};

const getIsUppercase = function () {
  const option = confirm("Do you want to include upper case ?");
  return option;
};

const getAcceptanceCriteria = function () {
  const acceptanceObj = {};
  const passwordLength = getPasswordLength();

  if (passwordLength >= 8 && passwordLength < 128) {
    const isNumber = getIsNumber();
    const isSpecialChar = getIsSpecialCharacter();
    const isLowercase = getIsLowercase();
    const isUppercase = getIsUppercase();
    acceptanceObj.isNumber = isNumber;
    acceptanceObj.length = passwordLength;
    acceptanceObj.isSpecialChar = isSpecialChar;
    acceptanceObj.isLowercase = isLowercase;
    acceptanceObj.isUppercase = isUppercase;

    return acceptanceObj;
  } else {
    alert("pls provide a valid length from 8 - 128");
    return;
  }
};
const getPasswordLength = function () {
  const passwordLengthtext = parseInt(
    prompt("Please choose the length of the password between 8 and 128")
  );
  return passwordLengthtext;
};
const numbers = "1234567890";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE

  const passwordOptions = getAcceptanceCriteria();
  let result = "";
  if (
    !passwordOptions.isNumber &&
    !passwordOptions.isSpecialChar &&
    !passwordOptions.isLowercase &&
    !passwordOptions.isUppercase
  ) {
    alert("Pls select one of the options to proceed");
  } else {
    if (passwordOptions.isNumber) {
      console.log("yes", numbers);
      result += numbers;
      console.log(result, "result");
    }
    if (passwordOptions.isSpecialChar) {
      result += specialChar;

      // add the special characters or arr in the possible options
    }
    const password = [];
    for (let i = 0; i < passwordOptions.length; i++) {
      const elem = getRandomIndex(result);
      password.push(elem);
    }
    console.log(result, password);
    return password.join("");
  }
}
const getRandomIndex = function (str) {
  const randomIndex = Math.floor(Math.random() * str.length);
  const elem = str.charAt(randomIndex);
  return elem;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// PLEASE ADD ALL YOUR CODE HERE

const passwordOptions = getAcceptanceCriteria();
let possibleCharacters = "";
if (
  !passwordOptions.isSpecialChar &&
  !passwordOptions.isNumber &&
  !passwordOptions.isLowercase &&
  !passwordOptions.isUppercase
) {
  alert("Pls select one of the options to proceed");
  return;
} else {
  // add the special characters or arr in the possible options
  if (passwordOptions.isNumber) {
    console.log("yes", numbers);
    possibleCharacters += numbers;
    console.log(possibleCharacters, "result");
  }
  if (passwordOptions.isSpecialChar) {
    console.log("yes", specialChar);
    possibleCharacters += specialChar;
    console.log(possibleCharacters, "result");
  }
  if (passwordOptions.isLowercase) {
    console.log("yes", lowercase);
    possibleCharacters += lowercase;
    console.log(possibleCharacters, "result");
  }

  if (passwordOptions.isUppercase) {
    console.log("yes", uppercase);
    possibleCharacters += uppercase;
    console.log(possibleCharacters, "result");
  }

  const password = [];
  for (let i = 0; i < passwordOptions.length; i++) {
    const elem = getRandomIndex(possibleCharacters);
    password.push(elem);
  }
  console.log(possibleCharacters, password);
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
