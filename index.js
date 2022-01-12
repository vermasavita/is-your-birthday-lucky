let dateOfBirth = document.querySelector("#date-of-birth");
let luckyNumber = document.querySelector("#lucky-number");
let checkNumber = document.querySelector("#check-button");
let message = document.querySelector("#message");

const compareValue = (sum, checkLuckyNumber) => {
  if (sum % checkLuckyNumber === 0) {
    message.innerText = "You are lucky! 😎";
  } else {
    message.innerText = "You are not born lucky, make your own luck! 🤗 ";
  }
}

const calculateSum = (dob) => {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}


const isYourBithdayLucky = () => {
  let dob = dateOfBirth.value;
  let checkLuckyNumber = Number(luckyNumber.value);
  if (checkLuckyNumber > 0) {
    if (checkLuckyNumber && dob) {
      let sum = calculateSum(dob);
      compareValue(sum, checkLuckyNumber);
    } else {
      message.innerText = "don't act smart, enter both fields 😡";
    }
  }else{
    message.innerText = "enter valid number";
  }
};

checkNumber.addEventListener("click",isYourBithdayLucky)