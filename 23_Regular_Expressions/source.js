// JS Regular Expressions
document.write("<h3>JS Regular Expressions</h3><br>");

/*
Theory: Regular Expressions

1) A regular expression is a sequence of characters that forms a search pattern.
2) The search pattern can be used for text search and text replace operations.
3) SYNTAX: /pattern/modifiers
4) Example: var patt = /anurag/i;
5) In above example `anurag` is a pattern and `i` is modifier (for case-insensitive)
*/

// 1) Using String search() with a String : The search() method searches a string for a specified value and returns the position of the match
var str = "Visit Ukan!";
var res = str.search("Ukan");
document.write("1. "+res+" | Type: "+typeof res+"<br>");

// 2) Using String search() With a Regular Expression
var str = "Visit Ukan!";
var res = str.search(/ukan/i);
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// 3) Using String replace() With a String : The replace() method replaces a specified value with another value in a string
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "Google");
document.write("3. "+res+" | Type: "+typeof res+"<br>");

// 4) Use String replace() With a Regular Expression
var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "Google");
document.write("4. "+res+" | Type: "+typeof res+"<br>");

// NOTE: Regular expressions can make your search much more powerful (case insensitive for example).

/*
KNOWLEDGE CLOUD: Regular Expression Modifiers

1) i : Perform case-insensitive matching
2) g : 	Perform a global match (find all matches rather than stopping after the first match)
3) m : Perform multiline matching
*/

// Example 1 : `g` modifier
var str = "Visit Microsoft and Microsoft!";
var res = str.replace(/Microsoft/g, "Google");
document.write("5. "+res+" | Type: "+typeof res+"<br>");

// Example 2 : `i` and `g` modifiers together
var str = "Visit Microsoft and Microsoft!";
var res = str.replace(/microsoft/ig, "Google");
document.write("6. "+res+" | Type: "+typeof res+"<br>");

// Example 3 : `m` modifier
var str = "Ananya Mohite and Ananya Pandey are palying Cricket \nAnanya Mohite and Ananya Pandey are palying Football.";
var res = str.replace(/^Ananya/m, "Anurag"); // for searching "Ananya" at the beiginning of each line in string
document.write("7. "+res+" | Type: "+typeof res+"<br>");

// Example 4 : `g` and `m` modifiers together
var str = "Ananya Mohite and Ananya Pandey are palying Cricket \nAnanya Mohite and Ananya Pandey are palying Football.";
var res = str.replace(/^Ananya/mg, "Anurag"); // for searching "Ananya" at the beiginning of each line in string
document.write("8. "+res+" | Type: "+typeof res+"<br>");

/*
KNOWLEDGE CLOUD: Regular Expression Patterns

(I) Brackets are used to find a range of characters.

1) [abc] : Find any of the characters between the brackets
2) [a-z] : Finds all lower case alphabets
3) [A-Z] : Finds all upper case alphabets
4) [a-zA-Z] : Finds both lower and upper case alphabets
5) [0-9] : Find any of the digits between the brackets
6) (x|y) : Find any of the alternatives separated with |

(II) Metacharacters are characters with a special meaning.

1) \d : Find a digit
2) \s : Find a whitespace character
3) \b : Find a match at the beginning of a word like this: \bWORD, 
        or at the end of a word like this: WORD\b
4) \uxxxx : Find the Unicode character specified by the hexadecimal number xxxx

(III) Quantifiers define quantities.

1) n+ : Matches any string that contains at least one n
2) n* : Matches any string that contains zero or more occurrences of n
3) n? : Matches any string that contains zero or one occurrences of n
*/

// Example 1 : [sa]
var str = "Is this all there is?";
var myPattern = /[sa]/g; 
var res = str.match(myPattern);
document.write("9. "+res+" | Type: "+typeof res+"<br>");

// Example 2 : [1-4]
var str = "0123456789";
var myPattern = /[1-4]/g; 
var res = str.match(myPattern);
document.write("9.1 "+res+" | Type: "+typeof res+"<br>");

// Example 3 : (red|green)
var str = "re, green, red, green, gren, gr, blue, yellow";
var myPattern = /(red|green)/g; 
var res = str.match(myPattern);
document.write("10. "+res+" | Type: "+typeof res+"<br>");

// Example 4 : \d
var str = "Give 100 and 200";
var myPattern = /\d/g; 
var res = str.match(myPattern);
document.write("11. "+res+" | Type: "+typeof res+"<br>");

// Example 4.1 : \d+
var str = "Give 100 and 200";
var myPattern = /\d+/g; 
var res = str.match(myPattern);
document.write("11.1 "+res+" | Type: "+typeof res+"<br>");

// Example 5 : \s
var str = "Is this all there is?";
var myPattern = /\s/g; 
var res = str.match(myPattern);
document.write("12. "+res+" | Type: "+typeof res+"<br>");

// Example 6 : \b for beginning
var str = "HELLO, LOOK AT YOU!";
var myPattern = /\bLO/g; 
var res = str.search(myPattern);
document.write("13. "+res+" | Type: "+typeof res+"<br>");

// Example 7 : \b for end
var str = "HELLO, LOOK AT YOU!";
var myPattern = /LO\b/g; 
var res = str.search(myPattern);
document.write("14. "+res+" | Type: "+typeof res+"<br>");

// Example 8 : \u0057
var str = "WOW, HELLO WORLD!";
var myPattern = /\u0057/g; 
var res = str.match(myPattern);
document.write("15. "+res+" | Type: "+typeof res+"<br>");

// Example 9 : O+
var str = "HELLOOOO WORLD! HELLO SCHOOL!";
var myPattern = /O+/g; 
var res = str.match(myPattern);
document.write("16. "+res+" | Type: "+typeof res+"<br>");

// Example 10 : lo*
var str = "Hellooo World! Hello School!";
var myPattern = /lo*/g; 
var res = str.match(myPattern);
document.write("17. "+res+" | Type: "+typeof res+"<br>");

// Example 11 : o*
var str = "Hellooo World! Hello School!";
var myPattern = /o*/g; 
var res = str.match(myPattern);
document.write("18. "+res+" | Type: "+typeof res+"<br>");

// Example 12 : 10?
var str = "1, 100 or 1000";
var myPattern = /10?/g; 
var res = str.match(myPattern);
document.write("19. "+res+" | Type: "+typeof res+"<br>");

// 5) Using the RegExp Object : In JavaScript, the RegExp object is a regular expression object with predefined properties and methods

// 5.1) Using test() : The test() method is a RegExp expression method. It searches a string for a pattern, and returns true or false, depending on the result.
var myPattern = /e/g; // this pattern will search of `e` in the given string
var res = myPattern.test("The best things in life are free!"); // it will return true because `e` is present in `myPattern`
document.write("20. "+res+" | Type: "+typeof res+"<br>");

// 5.2) Using exec()

/*
Theory:

1) The exec() method is a RegExp expression method.
2) It searches a string for a specified pattern, and returns the found text as an object.
3) If no match is found, it returns an empty (null) object.
*/

var myPattern = /e/g; // this pattern will search of `e` in the given string
var obj = myPattern.exec("The best things in life are free!");
document.write("21. Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input + " | typeof obj: " + typeof obj);
