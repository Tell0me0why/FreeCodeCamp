function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      let arr = rangeOfNumbers(endNum-1);
      arr.push(endNum);
      return arr;
  
    }
  
  };

  console.log(rangeOfNumbers(5,10));