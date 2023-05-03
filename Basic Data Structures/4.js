function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
  
  /**
   * We can also return the value of the removed
   *  element with either method like this:

let popped = greetings.pop();
   */