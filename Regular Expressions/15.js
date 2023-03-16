let reCriminals = /C+/g; // Change this line
/*
The regex /z+/ matches the letter z when it appears one or more times in a row.
It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following
 strings since there are no letter z characters:
 */
/*
  ""
"ABC"
"abcabc"
Write a greedy regex that finds one or more criminals
within a group of other people. A criminal is
represented by the capital letter C.
 */