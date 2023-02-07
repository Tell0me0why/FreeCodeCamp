/* 
Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
} */

const  magic = () =>  new Date();