// QUIZ TIME
document.write("<h3>Quiz Time:</h3><br>");

var s1 = "Anurag";  // typeof(s1) is string
var s2 = new String("Anurag"); // typeof(s2) is object
document.write("1. "+typeof(s1)+"<br>");
document.write("2. "+typeof(s2)+"<br>");
var res1 = s1 == s2; // `==` only checks for values
var res2 = s1 === s2; // `===` checks for both type and value
document.write("3. "+res1+"<br>");
document.write("4. "+res2+"<br>");

/*
NOTE:

1) Don't create strings as objects. It slows down execution speed.
2) The `new` keyword complicates the code. This can produce some unexpected results.
*/

var s1 = new String("Anurag");
var s2 = new String("Anurag");

var res1 = s1 == s2;
var res2 = s1 === s2;

document.write("5. "+res1+"<br>"); // s1 and s2 are differenct objects
document.write("6. "+res2+"<br>"); // s1 and s2 are differenct objects

// String Methods and Properties
document.write("<h3>String Methods:</h3><br>");

// 1) length : this property returns the length of a string
var s = "abcdefghijklmnopqrstuvwxyz";
var res = s.length;
document.write("1. "+res+"<br>");

// 2) indexOf() 

/*
Theory:

This method returns the index of the first occurrence of a specified text in a string
while searching from left-to-right
*/
var s = "I play cricket and I play chess";
var pos = s.indexOf("play"); // by default it starts searching from index 0 and searches till the end
document.write("2. "+pos+"<br>");
// for calculating index of second occurence of `play`
// Method 1: uncool method
var pos = s.indexOf("play",2+1); // it will start searching from index value 3 to the end of string
document.write("3. "+pos+"<br>");
// Method 2: cool method
var pos = s.indexOf("play",s.indexOf("play")+1); // it will also start searching from index value 3
document.write("4. "+pos+"<br>");

// NOTE: indexOf() returns `-1` if the specified text is not present in given string
var pos = s.indexOf("sudoku");
document.write("5. "+pos+"<br>");

// 3) lastIndexOf() 

/*
Theory:

This method returns the index of the find occurrence of a specified text 
in a string while searching from right-to-left
*/
var s = "I play cricket and I play chess";
var pos = s.lastIndexOf("play");
document.write("6. "+pos+"<br>");

var pos = s.lastIndexOf("play", 20) // it will start searching from index no 20 to the begining of string
document.write("7. "+pos+"<br>");

// NOTE: lastIndexOf() return `-1` if specified text is not found in the given string
var pos = s.lastIndexOf("sudoku");
document.write("8. "+pos+"<br>");

// 4) search() : method searches a string for a specified value and returns the position of the match

var s = "I play cricket and I play chess";
var pos = s.search("play");
document.write("9. "+pos+"<br>");

/*
Differences between search() and indexOf():-

1) `search()` method cannot take a second start position argument.
2) `indexOf()` method cannot take powerful search values(regular expressions).
*/

// 5) slice() 

/*
Theory:

1) It extracts a part of string and returns the extracted part in a new string.
2) SYNTAX: slice(start, end)
3) JS leaves the last character i.e. it extracts from start to (end-1)
*/

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
document.write("10. "+res+"<br>");

// NOTE: slice() accepts negative indexing
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
document.write("11. "+res+"<br>");

// NOTE: If the omit the `end` parameter, slice() will take end parameter as end of the string
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12);
document.write("12. "+res+"<br>");

// FACT: Negative positions do not work in Internet Explorer 8 and earlier.

// 6) substring() : Tt is similar to slice(). The difference is that it doesn't accept negative indexing
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
document.write("13. "+res+"<br>");

// NOTE: If you omit the second parameter, substring() will slice out the rest of the string.

// 7) substr() 

/*
Theory:

1) It is similar to slice(). 
2) The difference is that it specifies the length of the extracted part.
3) SYNTAX: slice(start, length)
*/

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
document.write("14. "+res+"<br>");

// NOTE: If you omit the second parameter, substr() will slice out the rest of the string.

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
document.write("15. "+res+"<br>");

// NOTE: substr() accepts negative indexing
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4); 
document.write("16. "+res+"<br>");

// 8) replace() : this method replaces a specified value with another value in a string

var str = "Please visit Microsoft!";
var res = str.replace("Microsoft", "Google");
document.write("17. "+res+"<br>");

// NOTE: The replace() method does not change the string it is called on. It returns a new string

// NOTE: By default, the replace() method replaces only the first match:

var str = "Please visit Microsoft and Microsoft!";
var res = str.replace("Microsoft", "Google");
document.write("18. "+res+"<br>");

// IMPORTANT: By default, the replace() method is case sensitive.
var str = "Please visit Microsoft!";
var res = str.replace("MICROSOFT", "Google"); // it won't replace
document.write("19. "+res+"<br>");

// TRICK: If you want to replace by case insensitively, then use a regular expression with an /i flag (here `/i` denotes insensitive)
var str = "Please visit Microsoft!";
var res = str.replace(/MICROSOFT/i, "Google"); // it won't replace
document.write("20. "+res+"<br>");

// NOTE: To replace all matches, use a regular expression with a /g flag (here /g denotes global match)
var str = "Please visit Microsoft and Microsoft!";
var res = str.replace(/MICROSOFT/ig, "Google");
document.write("21. "+res+"<br>");

// 9) toLowerCase() : it converts a string into lower case

var text = "Hello World!";
var res = text.toLowerCase();
document.write("22. "+res+"<br>");

// 10) toUpperCase() : it converts a string into upper case

var text = "Hello World!";
var res = text.toUpperCase();
document.write("23. "+res+"<br>");

// 11) concat() : it joins two or more strings
var text1 = "Hello";
var text2 = "World!";
var res = text1.concat(" ",text2);
document.write("24. "+res+"<br>");

/*
KNOWLEDGE CLOUD:

1) All string methods return a new string. They don't modify the original string.
2) Formally said: Strings are immutable: Strings cannot be changed.
*/

// 12) trim() : this method removes whitespace(s) from both sides of a string

var s = "       Hello     World!        ";
var res = s.trim();
document.write("25. "+res+"<br>");

// FACT: The trim() method is not supported in Internet Explorer 8 or lower.

// 13) charAt() : this method returns the character at a specified index in a string

var s = "Anurag";
var res = s.charAt(2); // charAt() does not accept negative indexing
document.write("26. "+res+"<br>");

// 14) charCodeAt() : this method returns the unicode of the character at a specified index in a string

var s = "Anurag";
var res = s.charCodeAt(0); // charAt() does not accept negative indexing
document.write("27. "+res+"<br>");

// NOTE: charCodeAt() method returns a UTF-16 code (an integer between 0 and 65535).

// 15) split() : A string can be converted to an array with the split() method.

var txt = "a,b,c,d,e";   // String
var arr1 = txt.split(",");          // Split on commas
var arr2 = txt.split(" ");          // Split on spaces
var arr3 = txt.split("|");          // Split on pipe
document.write("28. "+arr1[0]+" | Type: "+typeof(arr1)+"<br>");
document.write("29. "+arr2[0]+" | Type: "+typeof(arr2)+"<br>");
document.write("30. "+arr3[0]+" | Type: "+typeof(arr3)+"<br>");

/*
NOTE:

1) If the separator is omitted, the returned array will contain the whole string in index [0].
2) If the separator is "", the returned array will be an array of single characters.
*/

var str = "Hello";
var arr = str.split("");
document.write("30.<br>");
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}
