// Glance at Data Types
document.write("<h3>Glance at Data Types:</h3><br>");

// 1) typeof operator : it is used to find the type of a JavaScript variable

var x = typeof "";
document.write("1. "+x+"<br>");

var x = typeof "Anurag";
document.write("2. "+x+"<br>");

var x = typeof 10;
document.write("3. "+x+"<br>");

// 2) undefined : In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.

var y;
document.write("4. "+typeof y+"<br>");

// NOTE: Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
var y = "Anurag";
document.write("5. "+typeof y+"<br>");
y = undefined;
document.write("6. "+typeof y+"<br>");

// Empty Values
var x = ""; // The value is "", the typeof is "string"
document.write("7. Value: "+x+" | Type: "+typeof y+"<br>");

// 3) null

/*
Theory:

1) In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
2) Unfortunately, in JavaScript, the data type of null is an object.
3) You can consider it a bug in JavaScript that typeof null is an object. It should be null.
*/

// You can empty an object by setting it to null.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object
document.write("8. Value: "+person+" | Type: "+typeof person+"<br>");

// You can also empty an object by setting it to undefined.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined
document.write("9. Value: "+person+" | Type: "+typeof person+"<br>");

// Difference Between Undefined and Null

// undefined and null are equal in value but different in type
document.write("10. Type: "+typeof undefined+"<br>"); // undefined
document.write("11. Type: "+typeof null+"<br>"); // object

var z = null === undefined;         // false
document.write("12. Value: "+z+"Type: "+typeof z+"<br>");
var z = null == undefined;          // true
document.write("13. Value: "+z+"Type: "+typeof z+"<br>");

// Complex Data 
document.write("14. Type: "+typeof {name:'John', age:34}+"<br>"); // Returns "object"
document.write("15. Type: "+typeof [1,2,3,4]+"<br>"); // Returns "object" (not "array" because in JavaScript arrays are objects)
document.write("16. Type: "+typeof function myFunc(){}+"<br>"); // Returns "function"
