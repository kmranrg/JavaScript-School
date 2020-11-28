// JS Use Strict

// 1) "use strict" Directive

/*
Theory:

1) The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
2) With strict mode, you can not use undeclared variables.
3) The "use strict" directive was new in ECMAScript version 5.
4) All modern browsers support "use strict" except Internet Explorer 9 and lower.
*/

// 2) Declaring Strict Mode

/*
Theory:

1) Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
2) Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).
*/

// Example 1
"use strict";
x = 3.14;  // Uncaught ReferenceError: x is not defined

// NOTE: If you're on Google Chrome, press F12 to check for this error in console.

// Example 2
"use strict";
myFunction();
function myFunction(){
    y = 3.14; // Uncaught ReferenceError: y is not defined at myFunction
}

// NOTE: Declared inside a function, it has local scope (only the code inside the function is in strict mode)
// Example 4: "use strict" in local scope
x = 4.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  z = 3.14;   // Uncaught ReferenceError: z is not defined at myFunction
}

/* 
Why Strict Mode?

1) Strict mode makes it easier to write "secure" JavaScript.
2) Strict mode changes previously accepted "bad syntax" into real errors.
*/

// 3) Not Allowed in Strict Mode

// 3.1) Using a variable, without declaring it, is not allowed
"use strict";
x = 3.14;                // This will cause an error

// 3.2) Using an object, without declaring it, is not allowed. (Objects are variables too.)
"use strict";
m = {p1:10, p2:20};      // Uncaught ReferenceError: m is not defined

// 3.3) Deleting a variable (or object) is not allowed.
"use strict";
var x = 3.14;
delete x;  // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

// 3.4) Deleting a function is not allowed.
"use strict";
function x(p1, p2) {};
delete x; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

// 3.5) Duplicating a parameter name is not allowed
"use strict";
function x(p1, p1) {}; // Uncaught SyntaxError: Duplicate parameter name not allowed in this context

// 3.6) Octal numeric literals are not allowed
"use strict";
var x = 010; // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

// 3.7) Decimals with leading zeros are not allowed
"use strict";
var x = 0910; // Uncaught SyntaxError: Decimals with leading zeros are not allowed in strict mode.

// 3.8) Octal escape characters are not allowed
"use strict";
var x = "\010";  // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.

// 3.9) Writing to a read-only property is not allowed
"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;  // Uncaught TypeError: Cannot assign to read only property 'x' of object '#<Object>'

// 3.10) Writing to a get-only property is not allowed
"use strict";
var obj = {get x() {return 0} };
obj.x = 3.14;  // Uncaught TypeError: Cannot set property x of #<Object> which has only a getter

// 3.11) Deleting an undeletable property is not allowed
"use strict";
delete Object.prototype; // Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// 3.12) The word eval cannot be used as a variable
"use strict";
var eval = 3.14; // Uncaught SyntaxError: Unexpected eval or arguments in strict mode

// 3.13) The word `arguments` cannot be used as a variable
"use strict";
var arguments = 3.14;  // Uncaught SyntaxError: Unexpected eval or arguments in strict mode

// 3.14) The with statement is not allowed
"use strict";
with (Math){x = cos(2)}; // Uncaught SyntaxError: Strict mode code may not include a with statement

// 3.15) `this` keyword in functions behaves differently in strict mode
// IMPORTANT: If the object is not specified, functions in strict mode will return `undefined` and functions in normal mode will return the global object (window)
"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

// 3.16) Some strict mode reserved words
/*
Theory:

Keywords reserved for future JavaScript versions can NOT be used as variable names 
in strict mode. These are:

implements
interface
let
package
private
protected
public
static
yield
*/
"use strict";
var public = 1500;      // Uncaught SyntaxError: Unexpected strict mode reserved word