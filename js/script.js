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
