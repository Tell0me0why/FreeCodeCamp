let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result)
/*
You've learned shortcuts for common string patterns
 like alphanumerics. Another common pattern is
  looking for just digits or numbers.

The shortcut to look for digit characters is
 \d, with a lowercase d. This is equal
  to the character class [0-9], which
   looks for a single character of
    any number between zero and nine.
 */