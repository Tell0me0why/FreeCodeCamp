// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
      } else {
        const countArray = coundown(n - 1);
        countArray.pop(n);
        return countArray;
      }
    
    }
    console.log(countdown(10))
    // Only change code above this line