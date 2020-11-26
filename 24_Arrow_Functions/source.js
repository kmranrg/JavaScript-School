// JS Arrow Functions
document.write("<h3>JS Arrow Functions</h3><br>");

/*
KNOWLEDGE CLOUD: Why Arrow Functions??

1) Arrow functions allow us to write shorter function syntax.
2) Arrow functions were introduced in ES6.
*/

// 1) Hello World program before Arrow Function
hello1 = function() {
    return "Hello World";
}
document.write("1. "+hello1+" | Type: "+typeof hello1+"<br>");
var res = hello1();
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// 2) Hello World program with Arrow function
hello2 = () => {
    return "Hello World";
}
document.write("3. "+hello2+" | Type: "+typeof hello2+"<br>");
var res = hello2();
document.write("4. "+res+" | Type: "+typeof res+"<br>");

// NOTE: It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.

// 3) Arrow Functions Return Value by Default
hello3 = () => "Hello World"; // this only works if funcion has only one statement
document.write("5. "+hello3+" | Type: "+typeof hello3+"<br>");
document.write("6. "+hello3()+" | Type: "+typeof hello3()+"<br>");

// 4) Arrow Function With Parameters
hello4 = (val) => "Hello " + val;
document.write("7. "+hello4("Anurag")+" | Type: "+typeof hello4("Anurag")+"<br>");

// NOTE: In fact, if you have only one parameter, you can skip the parentheses as well

// 5) Arrow Function Without Parentheses
hello5 = val1 => "Hello " + val1;
document.write("8. "+hello5("Anurag")+" | Type: "+typeof hello5("Anurag")+"<br>");

// 6) `this` keyword in Arrow Function

/*
Theory:

1) The handling of this is also different in arrow functions compared to regular functions.
2) In regular functions the `this` keyword represents the object that called the function, which could be the window, the document, a button or whatever.
3) In Arrow Functions, the `this` keyword represents the object that owns the function, no matter who calls the function.
*/

// Example 1 : `this` in regular function
document.write("9. For output, see on top of page<br>");
hello6 = function() {
    document.getElementById("demo1").innerHTML += "9. "+this;
}
// the window object calls the function
window.addEventListener("load", hello6);
// a button object calls the function
document.getElementById("btn1").addEventListener("click", hello6); // let's click the button two times

// Example 2 : `this` in arrow function
document.write("10. For output, see on top of page<br>");
hello7 = () => {
    document.getElementById("demo2").innerHTML += "10. "+this;
}
// the window object calls the function
window.addEventListener("load", hello7);
// a button object calls the function
document.getElementById("btn2").addEventListener("click", hello7); // let's click the button two times