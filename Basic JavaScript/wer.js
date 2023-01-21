//I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers 
//A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

function alphabet(ns) {
 console.log(ns);
 ns.sort(function(a, b){return a - b});
 console.log(ns);
 let k1 = 0;
 let k2 = 0;
 for (let i = 0; i < 8; ++i) {
    if (ns[i] == ns[0] * ns[1] || ns[i-1] == ns[2] * ns[1]) {
        if (k1 == k2) {
            k1 = i;
            ns.splice(k1, 1);
        } else {
            k2 = i - 1;
        }
    }
    
 }
 
 ns.splice(k2 , 1);
 console.log(ns);
 return ns[3];
   
   }

 console.log(alphabet([360,1,24,750,750,15,18000,15]));