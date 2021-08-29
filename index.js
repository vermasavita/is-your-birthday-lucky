var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-button");
var message = document.querySelector("#message");

function compareValue(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
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
  var sum = calculateSum(dob);
  if(sum&&dob){
    compareValue(sum, luckyNumber.value);}
  else {message.innerText = "don't act smart, enter both fields 😡";}
});
