var displayDiv = document.querySelector("#display");
displayDiv.innerText = "0";
var currentNum = ""
var firstNum;
var secondNum;
var operator;

function press(number) {
  if (displayDiv.innerText === "0") {
    currentNum = number
    displayDiv.innerText = currentNum
  }
  else {
    currentNum += `${number}`
    displayDiv.innerText = currentNum
  }
}

function setOP(op) {
  firstNum = displayDiv.innerText
  operator = op
  clr()
}

function calculate() {
  secondNum = displayDiv.innerText
  firstNum = parseFloat(firstNum)
  secondNum = parseFloat(secondNum)
  var res = 0
  switch (operator) {
    case "+":
      res = firstNum + secondNum
      break;
    case "-":
      res = firstNum - secondNum
      break;
    case "*":
      res = firstNum * secondNum
      break;
    case "/":
      res = firstNum / secondNum
      break;
    default:
    break;
  }
  res.toString.length
  displayDiv.innerText = res
}

function clr() {
  displayDiv.innerText = "0"
}
