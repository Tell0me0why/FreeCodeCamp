const flip=(d, arr)=>{
  //TODO
  answer = [];
  if (d == "R") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let x = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = x;
        }
      }
    }
    return arr;
    
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let x = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = x;
        }
      }
    }
    return arr;

  }
  return 
}