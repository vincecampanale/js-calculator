// Things the calculator must do:
// When a NUMBER is pressed:
  // if the current-number is empty, add the pressed number the view
  // if current-number is not empty, tack the pressed number onto the end of whatever is in the view
    // UNLESS an operation was just completed: then clear the view and set current-number to the number that was just pressed

// When an OPERATION (+ , -, x, /) is pressed:
  // if current-number is empty, do nothing
  // if current-number contains a value, store that value in a variable and clear the number view
    // (also store which operation is being done)
    // allow the user to input the next number
    //when user presses '=', store the second number in another variable and run the operation
    //output result of operation to the number view

// When the +/- sign is pressed:
  //If current-number contains a positive value, tack on a negative to the front of current-number
  //If current-number contains a negative value, remove the negative sign in front of current-number
  //If current-number is empty, do nothing


//TODO: get operation out of global scope ******** VERY IMPORTANT
var operation = [];

(function operationEvents(){

  var currentNumber = 0;
    //use operation variable to store whichever operation goes down when equals button is pressed
    //**clear operation variable every time equals function fires


  var addButton = document.getElementById("add");
  addButton.addEventListener("click", function(){add()});

  var equalsButton = document.getElementById("equals");
  equalsButton.addEventListener("click", function(){equals()});

  function add(){
    if(operation.length > 1){
      equals();
    }

    currentNumber = getCurrentNumber();
    var numAsFloat = parseFloat(currentNumber);
    operation.push("+");

    console.log(numAsFloat);

  }

  function equals(){
    if(operation[operation.length - 1] === "+"){
      var numberToAdd = parseFloat(getCurrentNumber());
      currentNumber = parseFloat(currentNumber) + numberToAdd;
      generateDisplay([currentNumber]);
    }

    operation.splice(0, operation.length-1);
  }
})();









//add event listeners to relevant numbers and symbols. wrapped in an IIFE to keep global scope clean
(function numberEvents(){
  var one = document.getElementById("1");
  var two = document.getElementById("2");
  var three = document.getElementById("3");
  var four = document.getElementById("4");
  var five = document.getElementById("5");
  var six = document.getElementById("6");
  var seven = document.getElementById("7");
  var eight = document.getElementById("8");
  var nine = document.getElementById("9");
  var zero = document.getElementById("0");
  one.addEventListener("click", function(){pushNumber(1)});
  two.addEventListener("click", function(){pushNumber(2)});
  three.addEventListener("click", function(){pushNumber(3)});
  four.addEventListener("click", function(){pushNumber(4)});
  five.addEventListener("click", function(){pushNumber(5)});
  six.addEventListener("click", function(){pushNumber(6)});
  seven.addEventListener("click", function(){pushNumber(7)});
  eight.addEventListener("click", function(){pushNumber(8)});
  nine.addEventListener("click", function(){pushNumber(9)});
  zero.addEventListener("click", function(){pushNumber(0)});

  var dot = document.getElementById("dot");
  var negative = document.getElementById("negative");
  dot.addEventListener("click", function(){handleDot()});
  negative.addEventListener("click", function(){handleNegative()});
})();


function generateDisplay(arr){
  var newDisplay = arr.join("");
  var node = document.getElementById("currentNumber");
  node.innerHTML = newDisplay;
}

function handleDot(){
  var numArray = getCurrentNumberAsArray();
  //number can only contain one decimal point maximum
  if(numArray.indexOf(".") >= 0){
    return;
  } else {
    numArray.push(".");
  }
  generateDisplay(numArray);
}

function handleNegative(){
  //TODO: Solve edge case - user makes it negative when it's 4. so it becomes -4.0,
  // then tries to make it -4.1 but can't because of the 0
  var numArray = getCurrentNumberAsArray();
  if(numArray[numArray.length-1] === "."){
    numArray.push(0);
  }
  if(numArray[0] == "-"){
    numArray.splice(0, 1);
    generateDisplay(numArray);
    return;
  } else {
    numArray.unshift("-");
    generateDisplay(numArray);
  }
}

function pushNumber(num){
  var numArray = getCurrentNumberAsArray();
  numArray.push(num);
  generateDisplay(numArray);
}

//HELPER FUNCTIONS
function getCurrentNumber(){
  var node = document.getElementById("currentNumber");
  var number = node.innerHTML.trim();
  return number;
}

function getCurrentNumberAsArray(){
  var currentNumber = getCurrentNumber();
  var numArray = currentNumber.split("");
  return numArray;
}
