// Quiz Time: Math.random()
document.write("<h3>Quiz Time: Math.random()</h3><br>");

// Challenge 1: Generate a random integer between 0-5 (0 and 5 included)
var res = Math.floor(Math.random() * (5+1));
document.write("1. "+res+" | Type: "+typeof res+"<br>");

// Challenge 2: Generate a random integer between 1-5 (0 and 5 included)
var res = Math.floor(Math.random() * 5) + 1;
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// A Proper Random Function

// This JavaScript function always returns a random number between min (included) and max (excluded)
getRandomInteger1 = (min, max) => Math.floor(Math.random() * (max-min)) + min;
var res = getRandomInteger1(2,5);
document.write("3. "+res+" | Type: "+typeof res+"<br>");

// This JavaScript function always returns a random number between min and max (both included)
getRandomInteger2 = (min, max) => Math.floor(Math.random() * (max-min+1)) + min;
var res = getRandomInteger2(2,5);
document.write("4. "+res+" | Type: "+typeof res+"<br>");

// JS Exception Handling
document.write("<h3>JS Exception Handling</h3><br>");

/*
Theory: JavaScript Errors - Throw and Try to Catch

1) The `try` statement lets you test a block of code for errors.
2) The `catch` statement lets you handle the error.
3) The `throw` statement lets you create custom errors.
4) The `finally` statement lets you execute code, after `try` and `catch`, regardless of the result.
*/

// 1) try - catch block:
try{
    a+4; // this is going to throw an error because we didn't define variable `a`
} catch(err){
    document.write("1. Error: "+err+" | Error Name:"+err.name+" | Error Message: "+err.message+" | Type:"+typeof err+"<br>");
}

// NOTE: JavaScript will actually create an Error object with two properties: name and message.

// Another Example
try {
    adddlert("Welcome guest!");
} catch(err) {
    document.write("2. "+err+" | Type: "+typeof err.message+"<br>");
}

// NOTE: JavaScript catches adddlert as an error, and executes the catch code to handle it.

// 2) throw:

// Example: Program to accept no only between 5 and 10 othewise throw an exception(or error)
var x = 2;
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
} catch(err) {
    document.write("3. "+err+" | Type: "+typeof err.message+"<br>");
}

// HTML Validation: <input id="demo" type="number" min="5" max="10" step="1">

// 3) finally:

// Example: Program to accept no only between 5 and 10 othewise throw an exception(or error)
var x = "a";
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
} catch(err) {
    document.write("4. "+err+" | Type: "+typeof err.message+"<br>");
}finally{
    document.write("5. Bye-Bye!<br>");
}