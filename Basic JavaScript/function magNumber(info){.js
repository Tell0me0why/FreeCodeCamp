function magNumber(info){
    let answ;
    if (info[0] == "PT92" ) {
      answ =  Math.floor(info[1] * 3 / 17); 
      if (answ * 17 < info[1]*3) {
        answ++;
      }
      return answ;
    } 
    if (info[0] == "M4A1 ") {
       answ =  Math.floor(info[1] * 3 / 30); 
      if (answ * 30 <  info[1]*3) {
        answ++;
      }
      return answ;
    } 
  if (info[0] == "M16A2 " ) {
       answ =  Math.floor(info[1] * 3 / 30); 
      if (answ * 30 <  info[1]*3) {
        answ++;
      }
      return answ;
    } else {
       answ =  Math.floor(info[1] * 3 / 5); 
      if (answ * 5 <  info[1]*3) {
        answ++;
      }
      return answ;
    }
  }

  console.log(magNumber(["M4A1", 8]));