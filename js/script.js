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


//TODO: Maximum number of digits allowed in current number div is 9


//add event listeners to relevant numbers and symbols. wrapped in an IIFE to keep global scope clean
(function calculatorEvents(){
  //NUMBER EVENTS
  var one = document.getElementById("1");
  one.addEventListener("click", function(){pushNumber(1)});

  var two = document.getElementById("2");
  two.addEventListener("click", function(){pushNumber(2)});

  var three = document.getElementById("3");
  three.addEventListener("click", function(){pushNumber(3)});

  var four = document.getElementById("4");
  four.addEventListener("click", function(){pushNumber(4)});

  var five = document.getElementById("5");
  five.addEventListener("click", function(){pushNumber(5)});

  var six = document.getElementById("6");
  six.addEventListener("click", function(){pushNumber(6)});

  var seven = document.getElementById("7");
  seven.addEventListener("click", function(){pushNumber(7)});

  var eight = document.getElementById("8");
  eight.addEventListener("click", function(){pushNumber(8)});

  var nine = document.getElementById("9");
  nine.addEventListener("click", function(){pushNumber(9)});

  var zero = document.getElementById("0");
  zero.addEventListener("click", function(){pushNumber(0)});

  var dot = document.getElementById("dot");
  dot.addEventListener("click", function(){handleDot()});

  var negative = document.getElementById("negative");
  negative.addEventListener("click", function(){handleNegative()});


  //OPERATION EVENTS
  var addButton = document.getElementById("plus");
  addButton.addEventListener("click", function(){pushOperation("+")});

  var minusButton = document.getElementById("minus");
  minusButton.addEventListener("click", function(){pushOperation("-")});

  var timesButton = document.getElementById("times");
  timesButton.addEventListener("click", function(){pushOperation("*")});

  var divideButton = document.getElementById("over");
  divideButton.addEventListener("click", function(){pushOperation("/")})

  var equalsButton = document.getElementById("equals");
  equalsButton.addEventListener("click", function(){evaluateEquation()});

})();

//pushes the current number and the pressed operation onto the current equation, clears displayed number
function pushOperation(operation) {
  var currentEquationArr = getCurrentEquationAsArray();
  var currentNumber = getCurrentNumber();

  //if the equation has been evaluated,
  //wipe the current equation and start again with whatever number is currently displayed (ans from prev. equation)
  if(currentEquationArr.indexOf("=") !== -1){
    currentEquationArr = [];
  }

  currentEquationArr.push(currentNumber);
  currentEquationArr.push(operation);
  setCurrentEquation(currentEquationArr);
  resetDisplay();
}

//evaluates the current equation
function evaluateEquation() {
  var currentEquationArr = getCurrentEquationAsArray();
  var currentNumber = getCurrentNumber();
  currentEquationArr.push(currentNumber);
  var currentEquation = currentEquationArr.join('');
  var ans = eval(currentEquation);
  ans = ans.toString();
  if(ans.length > 9){
    ans = ans.substring(0, 9);
  }
  currentEquationArr.push("=", ans);
  setCurrentEquation(currentEquationArr);
  var numDisplay = document.getElementById("currentNumber");
  numDisplay.innerHTML = ans;
}


//handles the decimal point and its edge cases
function handleDot(){
  var numArray = getCurrentNumberAsArray();
  //number can only contain one decimal point maximum
  if(numArray.indexOf(".") >= 0){
    return;
  } else {
    numArray.push(".");
  }
  setCurrentNumber(numArray);
}
//handles the negative sign (making the presented number negative) and its edge cases
function handleNegative(){
  //TODO: Solve edge case - user makes it negative when it's 4. so it becomes -4.0,
  // then tries to make it -4.1 but can't because of the 0
  var numArray = getCurrentNumberAsArray();
  if(numArray[numArray.length-1] === "."){
    numArray.push(0);
  }
  if(numArray[0] == "-"){
    numArray.splice(0, 1);
    setCurrentNumber(numArray);
    return;
  } else {
    numArray.unshift("-");
    setCurrentNumber(numArray);
  }
}
//pushes a number onto the currently displayed number
function pushNumber(num){
  var numArray = getCurrentNumberAsArray();
  numArray.push(num);
  setCurrentNumber(numArray);
}


//~~~~~~~~~~~HELPER FUNCTIONS~~~~~~~~~~~

//resets the number view display
function resetDisplay(){
  var node = document.getElementById("currentNumber");
  node.innerHTML = [];
}
//        number getters/setters
//get current number as a string
function getCurrentNumber(){
  var node = document.getElementById("currentNumber");
  var number = node.innerHTML.trim();
  return number;
}
//get current number as an array
function getCurrentNumberAsArray(){
  var currentNumber = getCurrentNumber();
  var numArray = currentNumber.split("");
  return numArray;
}
//takes an array and loads it into current-number
function setCurrentNumber(arr){
  var newDisplay = arr.join("");
  var node = document.getElementById("currentNumber");
  node.innerHTML = newDisplay;
}

//        equation getters/setters
//get current equation as a string
function getCurrentEquation(){
  var node = document.getElementById("currentEquation");
  var currentEquation = node.innerHTML;
  return currentEquation;
}
//get current equation as an array
function getCurrentEquationAsArray(){
  var node = document.getElementById("currentEquation");
  var currentEquation = node.innerHTML;
  if(currentEquation !== ""){
    var eqArray = currentEquation.split("");
    return eqArray;
  }
  return [];
}
//takes an array and loads it into current-equation
function setCurrentEquation(arr){
  var newDisplay = arr.join("");
  var node = document.getElementById("currentEquation");
  node.innerHTML = newDisplay;
}
