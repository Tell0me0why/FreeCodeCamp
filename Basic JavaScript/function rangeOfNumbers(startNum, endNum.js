function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum < 0) {
      return [];
    } else {
      const  arr = rangeOfNumbers(startNum, endNum-1);
      arr.push(endNum);
      return arr;
  
    }
  
  };

  console.log(rangeOfNumbers(5,10));