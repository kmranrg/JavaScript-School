// QUIZ TIME
document.write("<h3>Quiz Time:</h3><br>");

var arr = ["1",2,3];
var str = "1,2,3";

// how to check the type of an array
var res1 = arr instanceof Array; // Method 1
var res2 = Array.isArray(arr); // Method 2
document.write("1. "+res1+"<br>");
document.write("2. "+res2+"<br>");

// comparing array with a string
var res1 = arr == str; // `==` checks only values (it does the necessary type conversion)
var res2 = arr === str; // `===` checks for both type and value (it does not do the type conversion)
document.write("3. "+res1+"<br>");
document.write("4. "+res2+"<br>");

var arr = new Array(1,2,3);
var str = "1,2,3";
var res1 = arr == str; // `==` checks only values (it does the necessary type conversion)
var res2 = arr === str; // `===` checks for both type and value (it does not do the type conversion)
document.write("5. "+res1+"<br>");
document.write("6. "+res2+"<br>");

// comparing two arrays
var a = [1,2,3]; // defining array using literal method
var b = [1,2,3];
var c = new Array(1,2,3); // defining array using `new Array()` method
var d = new Array(1,2,3);

var res = a == b;
document.write("7. "+res+"<br>");
var res = c == d;
document.write("8. "+res+"<br>");
var res = a == c;
document.write("9. "+res+"<br>");

// Suggestion: Don't define array variable using `new Array()` method. Always use literal method.

/*
NOTE:

1) JS Arrays are special kinds of objects.
2) Because of this you can have variables of different types in the same array.
3) You can have objects in an Array. You can have functions in an Array. 
4) Even you can have arrays in an Array.
*/

// NUMBERS
document.write("<h3>Numbers:</h3><br>");

// JavaScript has only one type of number. Numbers can be written with or without decimals

var x = 1;
var y = 1.01;
document.write("1. "+x+" | Type: "+typeof(x)+"<br>");
document.write("2. "+y+" | Type: "+typeof(y)+"<br>");

// NOTE: Extra large or extra small numbers can be written with scientific (exponent) notation

var x = 123e5;
var y = 123e-5;
document.write("3. "+x+" | Type: "+typeof(x)+"<br>");
document.write("4. "+y+" | Type: "+typeof(y)+"<br>");

// Precision

// In JS, Integers (numbers without a period or exponent notation) are accurate up to 15 digits
var x = 8888888888888888;  // (it has 16 digits)
var y = 999999999999999;   // (it has 15 digits)
var z = 9999999999999999;  // (it has 16 digits)
document.write("5. "+x+" | Type: "+typeof(x)+"<br>"); // x will be 8888888888888888 (100% accurate) 
document.write("6. "+y+" | Type: "+typeof(y)+"<br>"); // y will be 999999999999999 (100% accurate) 
document.write("7. "+z+" | Type: "+typeof(z)+"<br>"); // z will be 10000000000000000 (it's approximated) 

// NOTE: The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
var x = 0.2 + 0.1;
document.write("8. "+x+" | Type: "+typeof(x)+"<br>"); // x will be 0.30000000000000004

// let's solve the above problem
var x = (0.2 * 10 + 0.1 * 10) / 10;       
document.write("9. "+x+" | Type: "+typeof(x)+"<br>"); // x will be 0.3

// addition of number and string results in string concatenation
var x = 10;
var y = "20";
var res = x + y;
document.write("10. "+res+" | Type: "+typeof(res)+"<br>");

// Common Mistakes

// Mistake 1: to expect the result to be 30
var x = 10;
var y = 20;
var res = "The result is: " + x + y;
document.write("11. "+res+" | Type: "+typeof(res)+"<br>");

// Mistake 2: to expect the result to be 102030
var x = 10;
var y = 20;
var z = "30";
var res = x + y + z;
document.write("12. "+res+" | Type: "+typeof(res)+"<br>");

/*
Explanation of Mistake 2:

The JavaScript interpreter works from left to right.
First 10 + 20 is added because x and y are both numbers.
Then 30 + "30" is concatenated because z is a string.
*/

// Numeric Strings works for multiplication, division and subtraction but not addition

var x = "10";
var y = "20";

// Multiplication
var res = x * y;
document.write("13. "+res+" | Type: "+typeof(res)+"<br>");

// Division
var res = x / y;
document.write("14. "+res+" | Type: "+typeof(res)+"<br>");

// Subtraction
var res = x - y;
document.write("15. "+res+" | Type: "+typeof(res)+"<br>");

// Addition
var res = x + y;  // string concatenation
document.write("16. "+res+" | Type: "+typeof(res)+"<br>");

/*
NaN - Not a Number

1) `NaN` is a JavaScript reserved word indicating that a number is not a legal number.
2) Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number).
*/

var x = 10 / "anurag";
document.write("17. "+x+"<br>");

// However, if the string contains a numeric value , the result will be a number
var x = 10 / "100";
document.write("18. "+x+"<br>");

// how to check the type of NaN
var x = 10 / "anurag";
document.write("19. "+x+" | Type: "+typeof(x)+"<br>"); // here typeof() will return number
document.write("20. "+x+" | Type: "+isNaN(x)+"<br>"); // isNaN() will return true which means it's Not a Number

//  Some Mind Blowing Examples

// Example 1
var x = 5;
var y = NaN;
var res = x + y;
document.write("21. "+res+" | Type: "+isNaN(res)+"<br>");

// Example 2
var x = NaN;
var y = "5";
var z = NaN;
var res = x + y + z;
document.write("22. "+res+" | Type: "+isNaN(res)+"<br>");

// NOTE: `NaN` is a number, `typeof(NaN)` returns number.
document.write("23. "+typeof(NaN)+"<br>");

// Infinity : Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number

var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}

document.write("24. "+myNumber+" | Type: "+typeof(myNumber)+"<br>");

// NOTE: Division by 0 (zero) also generates Infinity
var x = 2 / 0;
var y = -2 / 0;
var z = 2 / -0;
var res = x + " " + y + " " + z;
document.write("25. "+res+" | Type: "+typeof(res)+"<br>");

// NOTE: Infinity is a number, `typeof(Infinity)` returns number
document.write("26. "+typeof(Infinity)+"<br>");
document.write("27. "+typeof(-Infinity)+"<br>");

// Hexadecimal : JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
var x = 0xFF; 
document.write("28. "+x+" | Type: "+typeof(x)+"<br>");

/* 
Warning:

Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
*/

/*
KNOWLEDGE CLOUD:

1) By default, JavaScript displays numbers as base 10 decimals.
2) toString() method can be used to output numbers from base 2 to base 36.
3) Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
*/

var myNumber = 32;
var a = myNumber.toString(10);  // returns 32
var b = myNumber.toString(32);  // returns 10
var c = myNumber.toString(16);  // returns 20
var d = myNumber.toString(8);   // returns 40
var e = myNumber.toString(2);   // returns 100000
var res = a + " " + b + " " + c + " " + d + " " + e;
document.write("29. "+res+" | Type: "+typeof(res)+"<br>");

// Numbers can be objects

// Normally JavaScript numbers are primitive values created from literals
var x = 123;
document.write("30. "+x+" | Type: "+typeof(x)+"<br>");

// But numbers can also be defined as objects with the keyword `new`:
var y = new Number(123);
document.write("31. "+y+" | Type: "+typeof(y)+"<br>");

// Warning: Do not create Number objects. It slows down execution speed.

// QUIZ TIME:
var x = 500; // `typeof(x)` returns number            
var y = new Number(500); // `typeof(y)` returns object

var res1 = x == y; // `==` will do the necessary type conversions and then compare the values
var res2 = x === y; // `===`  does not do the type conversions and it checks for both data-type and value

document.write("32. "+res1+" | Type: "+typeof(res1)+"<br>"); // true
document.write("33. "+res2+" | Type: "+typeof(res2)+"<br>"); // false

// comparing two objects
var x = new Number(500); // `typeof(x)` returns object            
var y = new Number(500); // `typeof(y)` returns object

var res1 = x == y; 
var res2 = x === y; 

document.write("34. "+res1+" | Type: "+typeof(res1)+"<br>"); // false
document.write("35. "+res2+" | Type: "+typeof(res2)+"<br>"); // false
