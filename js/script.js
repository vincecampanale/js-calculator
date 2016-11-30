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

//add event listeners to relevant numbers and symbols. wrapped in an IIFE to keep global scope clean
(function numberEventListeners(){
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
  var dot = document.getElementById("dot");
  var negative = document.getElementById("negative");
  one.addEventListener("click", function(){pushSymbol(1)});
  two.addEventListener("click", function(){pushSymbol(2)});
  three.addEventListener("click", function(){pushSymbol(3)});
  four.addEventListener("click", function(){pushSymbol(4)});
  five.addEventListener("click", function(){pushSymbol(5)});
  six.addEventListener("click", function(){pushSymbol(6)});
  seven.addEventListener("click", function(){pushSymbol(7)});
  eight.addEventListener("click", function(){pushSymbol(8)});
  nine.addEventListener("click", function(){pushSymbol(9)});
  zero.addEventListener("click", function(){pushSymbol(0)});
  dot.addEventListener("click", function(){pushSymbol('.')});
  
  //change this to handlNegative function - some edge cases not considered here
  negative.addEventListener("click", function(){pushSymbol('-')});
})();



//push the pressed number onto the displayed number
function pushSymbol(num){
  var currentNumber = getCurrentNumber();
  var numAsString = num.toString();
  var currentNumberAsString = currentNumber.toString();
  var array = currentNumberAsString.split('');

  //TODO: separate this logic into separate function called handleNegative
  if(num == '-' && array[0] == "-"){
    array.splice(0, 1);
    var newDisplay = array.join('');
    var node = document.getElementById("currentNumber");
    node.innerHTML = newDisplay;
    return;
  }

  if(num == '-' && array[0] !== "-"){
    array.unshift(num);
    var newDisplay = array.join('');
    var node = document.getElementById("currentNumber");
    node.innerHTML = newDisplay;
    return;
  }

  array.push(num);
  var newDisplay = array.join('');

  var node = document.getElementById("currentNumber");
  node.innerHTML = newDisplay;
}


function getCurrentNumber(){
  var node = document.getElementById("currentNumber");
  var number = node.innerHTML.trim();
  return number;
}

function add(){
  var currentNumber = getCurrentNumber();
}

var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}
