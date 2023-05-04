function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
  newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
  
  /**
   * The spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array
 like so:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray equals [true, true, undefined, false, null].
 thisArray remains unchanged and thatArray contains
  the same elements as thisArray.
   */