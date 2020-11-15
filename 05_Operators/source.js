// ASSOCIATION

// Right to left association
var a = 3; // `=` operator works on right to left  association
var b = 4;

// Left to right association
var result = a + b; // `+` operator works on left to right association

document.write("Output 1:",result+"<br>");

result = a + b + " Anurag " + a + b; // after `Anurag` all variables will be treated as strings

document.write("Output 2:",result+"<br>");

result = a + b + a; // first (a + b) is going to evaluate then ((a + b) + a) is going to evaluate

document.write("Output 3:",result+"<br>");

// multiplication operator has more priority than addition operator
result = a + b * a; // this time first (b * a) is going to evaluate then (a + (b * a)) is going to evaluate

document.write("Output 4:",result+"<br>");

// OPERATOR: instanceof

var fruits = ["Apple", "Mango", "Banana"]; 
  
result = 
    (fruits instanceof Array) + "<br>" + 
    (fruits instanceof Object) + "<br>" + 
    (fruits instanceof String) + "<br>" + 
    (fruits instanceof Number);

document.write("Output 5:","<br>"+result+"<br>");

/*
NOTE: instanceof

1) The instanceof operator in JavaScript is used to check the type of an object at run time.
2) It returns a boolean value if true then it indicates that the object is an instance of a
   particular class and if false then it is not.
*/

// Difference between == and === operator in JavaScript

/*
1) The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions
   before doing the equality comparison.
2) But the ‘===’ operator tests for strict equality i.e it will not do the type conversion
   hence if the two values are not of the same type, when compared, it will return false.
*/

// BITWISE OPERATOR (works on 32 bits)

// 1) Zero fill left shift (<<)

result = 13 << 1; // 1101 << 1 => 0001101 << 1 => 0011010 => 26 (you can add as many zeroes on the LHS, no problem)
document.write("Output 6:","<br>"+result+"<br>");

/*
TRICK: Zero fill left shift

x << y <=> x * (2 ** y)
*/

// 2) Zero fill right shift (>>>)

result = 13 >>> 1; // 1101 >>> 1 => 0001101 >>> 1 => 0000110 => 6
document.write("Output 7:","<br>"+result+"<br>");

/*
TRICK: Zero fill right shift 

x >>> y <=> x / (2 ** y) (neglect after decimal values)
*/

// KNOWLEDGE CLOUD: In JS, Negative numbers are stored in Two's Complement Binary Representation

/*
HOW TO CALCULATE 2's COMPLEMENT ??

Step 1: Convert into 1's complement (by just inverting digits i.e. 0 to 1 and 1 to 0)
Step 2: Add 1 to LSB (Least Significant Bit i.e. bit on the most left side)

Rules of Binary Addition:

1) 0 + 0 = 0
2) 0 + 1 = 1
3) 1 + 0 = 1
4) 1 + 1 = 10 


Example: Convert 1011 into 2's complement

Step 1: 0100 (1's complement)
Step 2: 0100 + 1 = 0101 (2's complement)
*/

// 3) Signed Right Shift (>>)

result = 13 >> 1; // 1101 >> 1 => 0001101 >> 1 => 0000110 => 6
document.write("Output 8:","<br>"+result+"<br>");

//NOTE: `>>` is known as arithmetic shift right and `>>>` is known as logical shift right

/*
DIFFERENCE BETWEEN `>>` AND `>>>`

1) They work the same for non-negative numbers.
2) For negative number, `>>` preserves the sign and works on binary form 
   but `>>>` does not preserve sign and works on 2's complement form.

Note: toString(2) is used to convert a number into string of binary form.
Example 1:

var p = (-12 >> 0).toString(2) // output: -1100 (binary form)
var p = -12 >> 0 // output: -12 (decimal form of above binary form)
 
var q = (-12 >>> 0).toString(2) // output: 11111111111111111111111111110100 i.e. 12 in 2's complement
var q = -12 >>> 0 // output: 4294967284 (decimal form of above 2's complement)
*/