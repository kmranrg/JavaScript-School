// JS Scope
document.write("<h3>JS Scope</h3><br>");

// 1) Local JS Variables : Variables declared within a JavaScript function, become LOCAL to the function.

// code here can NOT use carName
function myFunction() {
    var carName = "Volvo";
  
    // code here CAN use carName
  
}

// 2) Global JavaScript Variables : A variable declared outside a function, becomes GLOBAL.
var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName

}

/*
Javascript Variables

1) In JS, objects and functions are also variables.
2) Scope determines the accessibility of variables, objects, and functions from different parts of the code.

Automatically Global

1) If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
*/

// Example : This code example will declare a global variable carName, even if the value is assigned inside a function.
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

// NOTE: In "Strict Mode", undeclared variables are not automatically global.

// 3) Global Variables in HTML

/*
Theory:

1) With JavaScript, the global scope is the complete JavaScript environment.
2) In HTML, the global scope is the window object. All global variables belong to the window object.
*/
var carName = "Volvo";

// code here can use window.carName

/*
WARNING:

1) Do NOT create global variables unless you intend to.
2) Your global variables (or functions) can overwrite window variables (or functions).
3) Any function, including the window object, can overwrite your global variables and functions.

The Lifetime of JavaScript Variables:

1) The lifetime of a JavaScript variable starts when it is declared.
2) Local variables are deleted when the function is completed.
3) In a web browser, global variables are deleted when you close the browser window (or tab).

Function Arguments:

1) Function arguments (parameters) work as local variables inside functions.
*/

// JS Hoisting : Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.
document.write("<h3>JS Hoisting</h3><br>");

// 1) JavaScript Declarations are Hoisted : In JavaScript, a variable can be declared after it has been used.

// Example 1
x = 5; // Assign 5 to x
var res = x;                     // 5 is stored in varaible `res`
var x; // Declare x
document.write("1. "+res+"<br>");

// Example 2
var x; // Declare x
x = 5; // Assign 5 to x
var res = x;                     // 5 is stored in varaible `res`
document.write("2. "+res+"<br>");

// NOTE: Example 1 gives the same result as Example 2

// 2) JavaScript Initializations are Not Hoisted : JavaScript only hoists declarations, not initializations.

// Example 1
var x1 = 1;
var y1 = 2;
var res = x1 + " | " + y1;
document.write("3. "+res+"<br>");

// Example 2
var x2 = 1;
var res = x2 + " | " + y2;
document.write("4. "+res+"<br>");
var y2 = 2;

// JS internally writes Example 2 as follows:
var y3; // declaration on the top
var x3 = 1;
var res = x3 + " | " + y3;
document.write("5. "+res+"<br>");
y3 = 2;

// Good Habit: To avoid bugs, always declare all variables at the beginning of every scope. 