// JS let

/*
History:

1) ES2015 introduced two important new JavaScript keywords: `let` and `const`.
2) These two keywords provide Block Scope variables (and constants) in JavaScript.
3) Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. 
*/

// 1) Global Scope : Variables declared Globally (outside any function) have Global Scope.
var carName = "Volvo";
// code here can use carName
function myFunction() {
  // code here can also use carName
}

// NOTE: Global variables can be accessed from anywhere in a JavaScript program.

// 2) Function Scope : Variables declared Locally (inside a function) have Function Scope.
// code here can NOT use carName
function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}
// code here can NOT use carName

// NOTE: Local variables can only be accessed from inside the function where they are declared.

// 3) JavaScript Block Scope 
/*
Theory:

1) Variables declared with the var keyword cannot have Block Scope.
2) Variables declared inside a block {} can be accessed from outside the block.
*/
{
    var x = 2;
}
// x CAN be used here

// 4) let
/*
Theory:

1) Variables declared with the let keyword can have Block Scope.
2) Variables declared inside a block {} cannot be accessed from outside the block.
*/
{
    let x = 2;
}
// x can NOT be used here

// 5) Redeclaring Variables with var: Redeclaring a variable using the var keyword can impose problems.
var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2

// NOTE : Redeclaring a variable inside a block will also redeclare the variable outside the block.

// 5) Redeclaring Variables with let : Redeclaring a variable inside a block will not redeclare the variable outside the block
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

// Broweser Support: The let keyword is not fully supported in Internet Explorer 11 or earlier.

// 6) Loop Scope of var
var i = 5;
for (var i = 0; i <= 10; i++) {
  // some statements
}
// Here i is 11

// 7) Loop Scope of let
var i = 5;
for (let i = 0; i <= 10; i++) {
  // some statements
}
// Here i is 5

// 8) Function Scope : Variables declared with var and let are quite similar when declared inside a function. They both have function scope.
function myFunction1() {
    var carName = "Volvo";   // Function Scope
}
function myFunction2() {
    let carName = "Volvo";   // Function Scope
}

// 9) Global Scope : Variables declared with var and let are quite similar when declared outside a block. They both have global scope.
var x = 2;       // Global scope
let x = 2;       // Global scope

// 10) Global Variables in HTML
/*
Theory:

1) With JavaScript, the global scope is the JavaScript environment.
2) In HTML, the global scope is the window object.
3) Global variables defined with the var keyword belong to the window object.
*/
var carName = "Volvo";
// code here can use window.carName

// IMPORTANT: Global variables defined with the let keyword do not belong to the window object
let carName = "Volvo";
// code here cannot use window.carName

// 11) Redeclaring a JavaScript variable with var is allowed anywhere in a program
var x = 2;
// Now x is 2
var x = 3;
// Now x is 3

// 12) Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed
var x = 2;       // Allowed
let x = 3;       // Not allowed
{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

// 13) Redeclaring a let variable with let, in the same scope, or in the same block, is not allowed
let x = 2;       // Allowed
let x = 3;       // Not allowed
{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
}

// 14) Redeclaring a let variable with var, in the same scope, or in the same block, is not allowed
let x = 2;       // Allowed
var x = 3;       // Not allowed
{
  let x = 4;   // Allowed
  var x = 5;   // Not allowed
}

// 15) Redeclaring a variable with let, in another scope, or in another block, is allowed
let x = 2;       // Allowed
{
  let x = 3;   // Allowed
}
{
  let x = 4;   // Allowed
}

// 16) Hoisting with var: Variables defined with var are hoisted to the top and can be initialized at any time
carName = "Volvo";
var res = carName; // "Volvo" is going to store in `res` variable
var carName;

// 17) Hoisting with let
/*
Theory:

1) Variables defined with let are hoisted to the top of the block, but not initialized.
2) Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
3) Using a let variable before it is declared will result in a ReferenceError.
4) The variable is in a "temporal dead zone" from the start of the block until it is declared.
*/
// Example 1: this example in this code will result in ReferenceError
carName = "Volvo";
alert(carName); // using carName
let carName;

// Example 2: correct version of example 1
let carName;
carName = "Volvo";
alert(carName); // using carName

// JS const

// 1) const : Variables defined with const behave like let variables, except they cannot be reassigned
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// 2) Block Scope of const : Declaring a variable with const is similar to let when it comes to Block Scope.
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

// 3) Assigned when Declared: JavaScript const variables must be assigned a value when they are declared
// Example 1: Incorrect way
const PI;
PI = 3.14159265359;
// Example 2: Correct way
const PI = 3.14159265359;

/*
Theory:

1) The keyword const is a little misleading.
2) It does NOT define a constant value. It defines a constant reference to a value.
3) Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.
*/

// 4) Primitive Values : If we assign a primitive value to a constant, we cannot change the primitive value
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// 5) Constant Objects can Change : You can change the properties of a constant object
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";

// NOTE: But you can NOT reassign a constant object
// Example
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// 6) Constant Arrays can Change: You can change the elements of a constant array but you can NOT reassign a constant array
// Example 1
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");

// Example 2
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// 7) Redeclaring a JavaScript var variable is allowed anywhere in a program
var x = 2;    //  Allowed
var x = 3;    //  Allowed
x = 4;        //  Allowed

// 8) Redeclaring or reassigning an existing var or let variable to const, in the same scope, or in the same block, is not allowed
var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}

// 9) Redeclaring or reassigning an existing const variable, in the same scope, or in the same block, is not allowed
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed
{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}

// 10) Redeclaring a variable with const, in another scope, or in another block, is allowed
const x = 2;       // Allowed
{
  const x = 3;   // Allowed
}
{
  const x = 4;   // Allowed
}

// 11) Hoisting with var : Variables defined with var are hoisted to the top and can be initialized at any time 
carName = "Volvo";
alert(carName);
var carName;

// 12) Hoisting with const
/*
Theory:

1) Variables defined with const are hoisted to the top of the block, but not initialized
2) Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
3) Using a const variable before it is declared will result in a SyntaxError
4) The variable is in a "temporal dead zone" from the start of the block until it is declared
*/

// Example 1: the following code will produce SyntaxError
carName = "Volvo";
alert(carName); // using carName
const carName;

// Example 2: correct version of example 1
const carName;
carName = "Volvo";
alert(carName); // using carName