// toString()

document.write("<h3>Binary Decimal Conversions</h3><br>");

/*
Theory of toString():

The toString() method converts a number to a string.

SYNTAX:

number.toString(radix)

PARAMETER DESCRIPTION:

1) radix: 	Optional. Which base to use for representing a numeric value. 
            Must be an integer between 2 and 36.

            (i) 2 - The number will show as a binary value
            (ii) 8 - The number will show as an octal value
            (iii) 16 - The number will show as an hexadecimal value
*/

var a = 12;

var result;

// for converting into just string
result = a.toString();
document.write(result+"<br>");

// for converting into string of binary number
result = a.toString(2);
document.write(result+"<br>");

// for converting into string of octal number
result = a.toString(8);
document.write(result+"<br>");

// for converting into string of hexadecimal number
result = a.toString(16);
document.write(result+"<br>");

// Converting Decimal into Binary
function decimal2binary(dec){
    return (dec >> 0).toString(2);
}

result = decimal2binary(-13);
document.write(result+"<br>");

// Converting Binary to Decimal
function binary2decimal(bin){
    // parseInt(bin, 2) will convert binary number into decimal number and toString(10) will further convert into string form 
    return parseInt(bin, 2).toString(10);
}

result = binary2decimal(result);
document.write(result+"<br>");