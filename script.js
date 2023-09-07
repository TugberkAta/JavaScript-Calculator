let result = 0 ;
let lastString = ""

function calculate(numbers) {
    numbers.forEach((e, i) => {
      if (e !== "*" && e !== "/" && e !== "-" && e !== "+") {
        numbers[i] = Number(e);
      }
    });
  
    numbers.forEach((e, i) => {
      if (e === "*") {
        result = numbers[i - 1] * numbers[i + 1];
        numbers.splice(i - 1, 3, result);
      }
    });
  
    numbers.forEach((e, i) => {
      if (e === "/") {
        result = numbers[i - 1] / numbers[i + 1];
        numbers.splice(i - 1, 3, result);
      }
    });
  
    numbers.forEach((e, i) => {
        if (e === "+") {
          result = numbers[i - 1] + numbers[i + 1];
          numbers.splice(i - 1, 3, result);
        }
      });
    
      numbers.forEach((e, i) => {
        if (e === "-") {
          result = numbers[i - 1] - numbers[i + 1];
          numbers.splice(i - 1, 3, result);
        }
      });
    return result
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
const dotButton = document.getElementById("dot")

screenText.className = "screen-number"


screen.append(screenText)


addButton.addEventListener("click",(e)=>{
    if(lastString === " * " || lastString === " - " || lastString === " + " || lastString === " / " ){
        return 0
    }
    addText(" + ")
});

subtractButton.addEventListener("click",(e)=>{
    if(lastString === " * " || lastString === " - " || lastString === " + " || lastString === " / " ){
        return 0
    }
    addText(" - ")
});

divideButton.addEventListener("click",(e)=>{
    if(lastString === " * " || lastString === " - " || lastString === " + " || lastString === " / " ){
        return 0
    }
    addText(" / ")
});

multiplyButton.addEventListener("click",(e)=>{
    if(lastString === " * " || lastString === " - " || lastString === " + " || lastString === " / " ){
        return 0
    }
    addText(" * ")
});

oneButton.addEventListener("click",(e)=>{
    addText("1")
}); 

twoButton.addEventListener("click",(e)=>{
    addText("2")
}); 

threeButton.addEventListener("click",(e)=>{
    addText("3")
}); 

fourButton.addEventListener("click",(e)=>{
    addText("4")
}); 

fiveButton.addEventListener("click",(e)=>{
    addText("5")
}); 

sixButton.addEventListener("click",(e)=>{
    addText("6")
}); 

sevenButton.addEventListener("click",(e)=>{
    addText("7")
}); 

eightButton.addEventListener("click",(e)=>{
    addText("8")
}); 

nineButton.addEventListener("click",(e)=>{
    addText("9")
}); 

zeroButton.addEventListener("click",(e)=>{
    addText("0")
}); 

dotButton.addEventListener("click",(e)=>{
    addText(".")
}); 

clearButton.addEventListener("click",(e)=>{
    screenText.innerHTML= "";
    result = ""
    lastString = ""
});

operateButton.addEventListener("click",(e)=>{
    if(lastString === " * " || lastString === " - " || lastString === " + " || lastString === " / " ){
        return 0
    }
    calculate(screenText.textContent.split(" "));
    console.log(screenText.textContent.split(" "))
    screenText.innerHTML= "";
    screenText.textContent += result
});

function addText(string){
    if (lastString === string && (string === " * " || string === " - " || string === " + " || string === " / " ) 
    || lastString === "" && (string === " * " || string === " - " || string === " + " || string === " / " ) ){
        return 0
    }
    screenText.textContent = screenText.textContent + string
    lastString = string
}

