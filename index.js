var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-button");
var message = document.querySelector("#message");

function compareValue(sum, checkLuckyNumber) {
  if (sum % checkLuckyNumber === 0) {
    message.innerText = "You are lucky! 😎";
  } else {
    message.innerText = "You are not born lucky, make your own luck! 🤗 ";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumber.addEventListener("click", function isYourBithdayLucky() {
  var dob = dateOfBirth.value;
  var checkLuckyNumber = Number(luckyNumber.value);
  if (checkLuckyNumber > 0) {
    if (checkLuckyNumber && dob) {
      var sum = calculateSum(dob);
      compareValue(sum, checkLuckyNumber);
    } else {
      message.innerText = "don't act smart, enter both fields 😡";
    }
  }else{
    message.innerText = "enter valid number";
  }
});