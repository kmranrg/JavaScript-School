// JS for...in Loop
document.write("<h3>JS for...in Loop</h3><br>");

// 1) for...in loop working in Arrays
document.write("1. for...in loop working in Arrays<br>");
var arr = ["apple", "banana", "guava"];
for (var i in arr){
    document.write("Index: "+i+" | Element: "+arr[i]+"<br>");
}

// 2) for...in loop working in Objects
document.write("2. for...in loop working in Objects<br>");
var obj = {"apple":"red", "banana":"yellow", "guava":"green"};
for (var j in obj){
    document.write("Key: "+j+" | Value: "+obj[j]+" | Type: "+typeof obj+"<br>");
}

// JS eval()
document.write("<h3>JS eval()</h3><br>");

/*
Theory:

1) The eval() function evaluates or executes an argument.
2) If the argument is an expression, eval() evaluates the expression.
3) If the argument is one or more JavaScript statements, eval() executes the statements.
4) SYNTAX: eval(string)
5) Parameter Description: It can be a JavaScript expression, variable, statement, or sequence of statements
*/

var x = 10;
var y = 20;
var a = eval("x * y") + " | ";
var b = eval("2 + 2") + " | ";
var c = eval("x + 17") + " | ";

var res = a + b + c;
document.write("1. "+res+" Type: "+typeof res+"<br>");

// JS delete
document.write("<h3>JS delete</h3><br>");

// 1) DO YOU KNOW?? : How to add new property in an Object
document.write("1. How to add new property in an Object:<br>");
var obj = {
    id: 100, 
    name: "Anurag",
};
/*
NOTE: 

JS internally stores all the property names by default as strings only (like `id` is String) 
but the property value depends on the thier data types (like `0` is Number)
*/
obj["instagram_id"] = "kmranrg"; // adding new object property
var text1 = "{";
for (var i in obj){
    text1 +=typeof i+" "+i+":"+typeof obj[i]+" "+obj[i]+",";
}
var ans1 = text1.slice(0,-1); // it will remove the last character present in string variable `text1`
ans1 += "}";
document.write(ans1+"<br>");

// 2) DO YOU KNOW?? : How to delete an object property
document.write("2. How to delete an object property:<br>");
delete obj["instagram_id"]; // it will delete the instagram_id from the `obj`
var text2 = "{";
for (var i in obj){
    text2 += i+":"+obj[i]+",";
}
var ans2 = text2.slice(0,-1); // it will remove the last character present in string variable `text2`
ans2 += "}";
document.write(ans2+"<br>");