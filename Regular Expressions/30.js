let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).* Roosevelt/; // Change this line
let result = myRegex.test(myString) // Change this line
// After passing the challenge experiment with myString and see how the grouping works

/*
 Sometimes we want to check for groups of characters using a Regular Expression and 
 to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the f
ollowing Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by
 using the test() method.
 
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
The test method here would return true.
 */