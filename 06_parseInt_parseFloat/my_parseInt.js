// parseInt()

document.write("<h3>parseInt()</h3><br>");

/*
Theory of parseInt():

The parseInt() function parses a string and returns an integer.

The radix parameter is used to specify which numeral system to be used,
for example, a radix of 16 (hexadecimal) indicates that the number in the string 
should be parsed from a hexadecimal number to a decimal number.

If the radix parameter is omitted, JavaScript assumes the following:

1) If the string begins with "0x", the radix is 16 (hexadecimal)
2) If the string begins with any other value, the radix is 10 (decimal)

Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseInt() returns NaN.

SYNTAX:

parseInt(string, radix)

Parameter Description:

1) string: Required. The string to be parsed
2) radix: Optional. A number (from 2 to 36) that represents the numeral system to be used

*/

// Implementation

var a = parseInt("10") + "<br>";
var b = parseInt("10.00") + "<br>";
var c = parseInt("10.33") + "<br>";
var d = parseInt("34 45 66") + "<br>";
var e = parseInt("   60   ") + "<br>";
var f = parseInt("40 years") + "<br>";
var g = parseInt("He was 40") + "<br>";

var h = parseInt("110", 10)+ "<br>"; // decimal into decimal conversion
var i = parseInt("01110")+ "<br>"; // decimal into decimal conversion
var j = parseInt("101", 8)+ "<br>"; // octal into decimal conversion
var k = parseInt("0x100")+ "<br>"; // hexadecimal into decimal conversion
var l = parseInt("111", 16)+ "<br>"; // hexadecimal into decimal conversion
var m = parseInt("111", 2)+ "<br>"; // binary into decimal conversion

var result = a + b + c + d + e + f + g + "<br>" + h + i + j + k + l + m;

document.write(result);