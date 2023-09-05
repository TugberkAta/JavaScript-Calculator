let firstNumber= " " ; 
let secondNumber ;
let Result = 0 ;
let lastResult = 0;
let operator = "";
let toggle = true;

function subtractFunc(firstNumber,secondNumber){
    return Number(secondNumber)- Number(firstNumber)
}

function addFunc(firstNumber,secondNumber){
    return Number(secondNumber)+ Number(firstNumber)
 }

 function multiplyFunc(firstNumber,secondNumber){
    return Number(secondNumber)* Number(firstNumber)
 }
 
 function divideFunc(firstNumber,secondNumber){
    return Number(secondNumber)/Number(firstNumber)
 }

 function operate(firstNumber, secondNumber, operator) {
    if (operator === "subtract") {
      return subtractFunc(firstNumber, secondNumber);
    } else if (operator === "add") {
      return addFunc(firstNumber, secondNumber);
    } else if (operator === "multiply") {
      return multiplyFunc(firstNumber, secondNumber);
    } else if (operator === "divide") {
      return divideFunc(firstNumber, secondNumber);
    } else if (operator === ""){
        return lastResult
    }
  }


  
const body = document.body

const addButton = document.getElementById("add-operator");
const subtractButton = document.getElementById("subtract-operator");
const divideButton = document.getElementById("divide-operator");
const multiplyButton = document.getElementById("multiply-operator");
const screenText = document.createElement("p")
const screen = document.getElementById("screen")
const clearButton = document.getElementById("clear-button")
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const operateButton = document.getElementById("equals-operator")

screenText.className = "screen-number"

screen.append(screenText)

addButton.addEventListener("click",(e)=>{
    secondNumber = firstNumber
    firstNumber = ""
    addText("+")
    operator = "add"
    console.log(operator)
});

subtractButton.addEventListener("click",(e)=>{
    secondNumber = firstNumber
    firstNumber = ""
    addText("-")
    operator = "subtract"
    console.log(operator)
});

divideButton.addEventListener("click",(e)=>{
    secondNumber = firstNumber
    firstNumber = ""
    addText("/")
    operator = "divide"
    console.log(operator)
});

multiplyButton.addEventListener("click",(e)=>{
    secondNumber = firstNumber
    firstNumber = ""
    addText("*")
    operator = "multiply"
    console.log(operator)
});

oneButton.addEventListener("click",(e)=>{
    addText("1")
    firstNumber = firstNumber + "1"
}); 

twoButton.addEventListener("click",(e)=>{
    addText("2")
    firstNumber = firstNumber + "2"
}); 

threeButton.addEventListener("click",(e)=>{
    addText("3")
    firstNumber = firstNumber + "3"
}); 

fourButton.addEventListener("click",(e)=>{
    addText("4")
    firstNumber = firstNumber + "4"
}); 

fiveButton.addEventListener("click",(e)=>{
    addText("5")
    firstNumber = firstNumber + "5"
}); 

sixButton.addEventListener("click",(e)=>{
    addText("6")
    firstNumber = firstNumber + "6"
}); 

sevenButton.addEventListener("click",(e)=>{
    addText("7")
    firstNumber = firstNumber + "7"
}); 

eightButton.addEventListener("click",(e)=>{
    addText("8")
    firstNumber = firstNumber + "8"
}); 

nineButton.addEventListener("click",(e)=>{
    addText("9")
    firstNumber = firstNumber + "9"
}); 

zeroButton.addEventListener("click",(e)=>{
    addText("0")
    firstNumber = firstNumber + "0"
}); 

clearButton.addEventListener("click",(e)=>{
    screenText.innerHTML= "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    toggle = true
});

operateButton.addEventListener("click",(e)=>{
    if (toggle === true){
    Result = operate(firstNumber, secondNumber, operator)
    toggle = false
    }
    else{
    Result = operate(firstNumber, lastResult, operator)
    }
    screenText.innerHTML= "";
    addText(Result)
    lastResult = Result
    Result = 0
    operator = ""
});

function addText(string){
    screenText.textContent = screenText.textContent + string
}