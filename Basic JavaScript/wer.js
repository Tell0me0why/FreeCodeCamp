//I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers 
//A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

function alphabet(ns) {
 ns = ns.sort();
 console.log(ns);
 m = ns[7];
 console.log(ns);
 for (let i = 0; i < 8; ++i) {
    if (ns[i] == ns[0] * ns[1] || ns[i] == ns[2] * ns[1]) {
        ns.splice(i,1);
    }
 }
 return ns[5] / ns[3];
   
   }

 console.log(alphabet([1, 12, 2, 2, 3, 4, 4, 6]));