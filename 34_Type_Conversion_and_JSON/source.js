// JS Type Conversion
document.write("<h3>JS Type Conversion</h3><br>");

// 1) JS  Data Types
/*
Theory:

In JavaScript there are 5 different data types that can contain values:

1) string
2) number
3) boolean
4) object
5) function

There are 6 types of objects:

1) Object
2) Date
3) Array
4) String
5) Number
6) Boolean

There are data types that cannot contain values:

1) null
2) undefined
*/

// 1) typeof operator : can be used to find the data type of a JavaScript variable
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object

// 2) how to check data type of a data variable
var x = new Date()
var res = x instanceof Date; // it will return true because `res` is a date variable
document.write("1. "+res+" | Type: "+typeof res+"<br>");

// 3) Date Type of typeof
/*
Theory:

1) The typeofoperator is not a variable. It is an operator.
2) And operators ( + - * / ) do not have any data type.
3) But, the typeof operator always returns a string (containing the type of the operand)
*/

// 4) The constructor Property : returns the constructor function for all JavaScript variables
var x = "John";
var res = x.constructor;                // Returns function String()  {[native code]}
document.write("2. "+res+" | Type: "+typeof res+"<br>");

var x = 3.14;
var res = x.constructor;                // Returns function Number()  {[native code]}
document.write("3. "+res+" | Type: "+typeof res+"<br>");

var x = false
var res = x.constructor;                 // Returns function Boolean() {[native code]}
document.write("4. "+res+" | Type: "+typeof res+"<br>");

var x = [1,2,3,4]
var res = x.constructor             // Returns function Array()   {[native code]}
document.write("5. "+res+" | Type: "+typeof res+"<br>");

var o = {"name":'John',"age":34}.constructor  
var res = o.constructor  // Returns function Object()  {[native code]}
document.write("6. "+res+" | Type: "+typeof res+"<br>");

var x = new Date()
var res = x.constructor            // Returns function Date()    {[native code]}
document.write("7. "+res+" | Type: "+typeof res+"<br>");

var hello = () => "hello world";
var res = hello.constructor() 
document.write("8. "+res+" | Type: "+typeof res+"<br>");

function hello1(){
    return "hello world";
}
var res = hello1.constructor() 
document.write("9. "+res+" | Type: "+typeof res+"<br>");

// 5) Converting Numbers to Strings
// Example 1
var x = 123;
var res = String(x);
document.write("10. "+res+" | Type: "+typeof res+"<br>");
// Exmaple 2
var x = 123;
var res = x.toString();
document.write("10.1. "+res+" | Type: "+typeof res+"<br>");

// 6) Converting Booleans to Strings
var x = false;
var res = String(x);
document.write("11. "+res+" | Type: "+typeof res+"<br>");

// 7) Converting Dates to Strings
var x = new Date;
var res = String(x);
document.write("12. "+res+" | Type: "+typeof res+"<br>");

// 8) Converting Strings to Numbers
// Example 1
var x = "34.12";
var res = Number(x);
document.write("13. "+res+" | Type: "+typeof res+"<br>");
// Example 2
var x = "34.12";
var res = parseInt(x);
document.write("13.1. "+res+" | Type: "+typeof res+"<br>");
// Example 3
var x = "34.12";
var res = parseFloat(x);
document.write("13.2. "+res+" | Type: "+typeof res+"<br>");

// 9) Converting Booleans to Numbers
var x = true;
var res = Number(x);
document.write("14. "+res+" | Type: "+typeof res+"<br>");

// 10) Automatic Type Conversion
var res = 5 + null    // returns 5         because null is converted to 0
document.write("15. "+res+" | Type: "+typeof res+"<br>");
var res = "5" + null  // returns "5null"   because null is converted to "null"
document.write("16. "+res+" | Type: "+typeof res+"<br>");
var res = "5" + 2     // returns "52"      because 2 is converted to "2"
document.write("17. "+res+" | Type: "+typeof res+"<br>");
var res = "5" - 2     // returns 3         because "5" is converted to 5
document.write("18. "+res+" | Type: "+typeof res+"<br>");
var res = "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
document.write("19. "+res+" | Type: "+typeof res+"<br>");

// JSON
document.write("<h3>JSON</h3><br>");
/*
Theory:

1) JSON: JavaScript Object Notation.
2) JSON is a syntax for storing and exchanging data.
3) JSON is a lightweight data-interchange format.
4) JSON is language independent
*/

// 1) Sending Data : If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server
var myObj = {name: "Kumar Anurag", age: 19, city: "New Delhi"};
var myJSON = JSON.stringify(myObj);
document.write("1. "+myJSON+" | Type: "+typeof myJSON+"<br>");

// 2) Receiving Data : If you receive data in JSON format, you can convert it into a JavaScript object
var myJSON_received = myJSON;
var myObj = JSON.parse(myJSON_received);
document.write("2. "+myObj.name+" | Type: "+typeof myObj+"<br>");

// Example : sending and receiving JSON
var myObj = [
    {
        name: "anurag",
        age: 19
    },
    {
        name: "nikita",
        age: 20
    }
];
var myJSON = JSON.stringify(myObj);
document.write("3. "+myJSON+" | Type: "+typeof myJSON+"<br>");
var myJSON_received = myJSON;
var myObj = JSON.parse(myJSON_received);
document.write("4. "+myObj[1].name+" | Type: "+typeof myObj+"<br>");