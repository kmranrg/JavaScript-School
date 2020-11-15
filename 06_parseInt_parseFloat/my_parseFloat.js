// parseFloat()

document.write("<h3>parseFloat()</h3><br>");

/*
Theory of parseFloat():

The parseFloat() function parses a string and returns a floating point number.

This function determines if the first character in the specified string is a number.
If it is, it parses the string until it reaches the end of the number, and returns the 
number as a number, not as a string.

Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseFloat() returns NaN.

SYNTAX:

parseFloat(string)

PARAMETER DESCRIPTION:

1) string: Required. The string to be parsed
*/

// Implementation

var a = parseFloat("10");
var b = parseFloat("10.00");
var c = parseFloat("10.33");
var d = parseFloat("34 45 66");
var e = parseFloat("   60   ");
var f = parseFloat("40 years");
var g = parseFloat("He was 40");

result =
a + "<br>" +
b + "<br>" +
c + "<br>" +
d + "<br>" +
e + "<br>" +
f + "<br>" +
g;

document.write(result);