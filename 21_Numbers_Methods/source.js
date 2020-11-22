// JS Number Methods
document.write("<h3>JS Number Methods</h3><br>");

// 1) toString() : this method returns a number as a string.

var x = 123;
var res = x.toString();
document.write("1. "+res+" | Type: "+typeof res+"<br>");

var res = (120 + 3).toString();
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// 2) toExponential()

/*
Theory:

1) `toExponential()` returns a string, with a number rounded and written using exponential notation.
2) A parameter defines the number of characters behind the decimal point.
3) The parameter is optional. If you don't specify it, JavaScript will not round the number.
*/

var x = 9.656;
var res = x.toExponential(2);
document.write("3. "+res+" | Type: "+typeof res+"<br>");

var res = x.toExponential(4);
document.write("4. "+res+" | Type: "+typeof res+"<br>");

var res = x.toExponential(6);
document.write("5. "+res+" | Type: "+typeof res+"<br>");

// 3) toFixed() : this method returns a string, with the number written with a specified number of decimals

var x = 9.656;
var res = x.toFixed(0);
document.write("6. "+res+" | Type: "+typeof res+"<br>");

var res = x.toFixed(2);
document.write("7. "+res+" | Type: "+typeof res+"<br>");

var res = x.toFixed(6);
document.write("8. "+res+" | Type: "+typeof res+"<br>");

// NOTE: toFixed(2) is perfect for working with money.

// 4) toPrecision() : this method returns a string, with a number written with a specified length

var x = 9.656;
var res = x.toPrecision();  
document.write("9. "+res+" | Type: "+typeof res+"<br>");

var res = x.toPrecision(2);  
document.write("10. "+res+" | Type: "+typeof res+"<br>");

var res = x.toPrecision(4);  
document.write("11. "+res+" | Type: "+typeof res+"<br>");

var res = x.toPrecision(6);  
document.write("12. "+res+" | Type: "+typeof res+"<br>");

// 5) valueOf() : this method returns a number as a number.

var x = 123;
var res = x.valueOf();
document.write("13. "+res+" | Type: "+typeof res+"<br>");

var res = (120 + 3).valueOf();
document.write("14. "+res+" | Type: "+typeof res+"<br>");

// 6) Number() : this method can be used to convert JavaScript variables to numbers

var res = Number(true);          // returns 1
document.write("15. "+res+" | Type: "+typeof res+"<br>");

var res = Number(false);         // returns 0
document.write("16. "+res+" | Type: "+typeof res+"<br>");

var res = Number("10");          // returns 10
document.write("17. "+res+" | Type: "+typeof res+"<br>");

var res = Number("  10");        // returns 10
document.write("18. "+res+" | Type: "+typeof res+"<br>");

var res = Number("10  ");        // returns 10
document.write("19. "+res+" | Type: "+typeof res+"<br>");

var res = Number(" 10  ");       // returns 10
document.write("20. "+res+" | Type: "+typeof res+"<br>");

var res = Number("10.33");       // returns 10.33
document.write("21. "+res+" | Type: "+typeof res+"<br>");

var res = Number("10,33");       // returns NaN
document.write("22. "+res+" | Type: "+typeof res+"<br>");

var res = Number("10 33");       // returns NaN
document.write("23. "+res+" | Type: "+typeof res+"<br>");

var res = Number("John");        // returns NaN
document.write("24. "+res+" | Type: "+typeof res+"<br>");

var res = Number(new Date("2017-09-30"));   // returns the number of milliseconds since Jan 1, 1970
document.write("24. "+res+" | Type: "+typeof res+"<br>");

// 7) parseInt() : parses a string and returns a number. If spaces are present then only the first number is returned

var res = parseInt("10");         // returns 10
document.write("25. "+res+" | Type: "+typeof res+"<br>");

var res = parseInt("10.33");      // returns 10
document.write("26. "+res+" | Type: "+typeof res+"<br>");

var res = parseInt("10 20 30");   // returns 10
document.write("27. "+res+" | Type: "+typeof res+"<br>");

var res = parseInt("10 years");   // returns 10
document.write("28. "+res+" | Type: "+typeof res+"<br>");

var res = parseInt("years 10");   // returns NaN 
document.write("29. "+res+" | Type: "+typeof res+"<br>");

// 8) parseFloat() : parses a string and returns a number (or floating number). If spaces are present then only the first number is returned

var res = parseFloat("10");        // returns 10
document.write("30. "+res+" | Type: "+typeof res+"<br>");

var res = parseFloat("10.33");     // returns 10.33
document.write("31. "+res+" | Type: "+typeof res+"<br>");

var res = parseFloat("10 20 30");  // returns 10
document.write("32. "+res+" | Type: "+typeof res+"<br>");

var res = parseFloat("10 years");  // returns 10
document.write("33. "+res+" | Type: "+typeof res+"<br>");

var res = parseFloat("years 10");  // returns NaN
document.write("34. "+res+" | Type: "+typeof res+"<br>");

// JS Number Properties
document.write("<h3>JS Number Properties</h3><br>");

// 1)  MAX_VALUE : returns the largest possible number in JavaScript.

var res = Number.MAX_VALUE;
document.write("1. "+res+" | Type: "+typeof res+"<br>");

// 2)  MIN_VALUE : returns the lowest possible number in JavaScript.

var res = Number.MIN_VALUE;
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// 3) POSITIVE_INFINITY

var res = Number.POSITIVE_INFINITY;
document.write("3. "+res+" | Type: "+typeof res+"<br>");

var res = 1/0;
document.write("4. "+res+" | Type: "+typeof res+"<br>");

// 3) NEGATIVE_INFINITY

var res = Number.NEGATIVE_INFINITY;
document.write("5. "+res+" | Type: "+typeof res+"<br>");

var res = -1/0;
document.write("6. "+res+" | Type: "+typeof res+"<br>");

// 4) NaN : Not a Number

var res = Number.NaN;
document.write("7. "+res+" | Type: "+typeof res+"<br>");

var res = 100/"Apple";
document.write("8. "+res+" | Type: "+typeof res+"<br>");

// NOTE: Number Properties Cannot be Used on Variables
var x = 6;
var res = x.MAX_VALUE;    // y becomes undefined
document.write("9. "+res+" | Type: "+typeof res+"<br>");


