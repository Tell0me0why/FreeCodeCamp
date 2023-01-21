function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum < 0) {
      return [];
    } else {
      let  arr = rangeOfNumbers(startNum, endNum--);
      arr.push(endNum);
      return arr;
  
    }
  
  };

  console.log(rangeOfNumbers(5,10));