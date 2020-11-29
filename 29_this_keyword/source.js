// JS `this` keyword
document.write("<h3>JS `this` keyword</h3><br>");

var person = {
    firstName: "Kumar",
    lastName : "Anurag",
    id       : 100,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

// 1) `this` in a method : In an object method, this refers to the "owner" of the method.
var res = person.fullName(); // this.firstName will be person.firstName
document.write("1. "+res+" | Type: "+typeof  res+"<br>");

// 2) `this` alone : When used alone, the owner is the Global object, so `this` refers to the Global object.
var res = this;
document.write("2. "+res+" | Type: "+typeof  res+"<br>");

// 3) `this` alone in strict mode :  In strict mode, when used alone, `this` also refers to the Global object [object Window]
"use strict";
var res = this;
document.write("3. "+res+" | Type: "+typeof  res+"<br>");

// 4) `this` in a function : In a JavaScript function, the owner of the function is the default binding for `this`
function myFunction1() {
    return this;
}
var res = myFunction1();
document.write("4. "+res+" | Type: "+typeof  res+"<br>");

// 5) `this` in a Function (Strict) : JavaScript strict mode does not allow default binding. So, when used in a function, in strict mode, `this` is `undefined`.
"use strict";
function myFunction2() {
    return this;
}
var res = myFunction2(); // here myFunction2() will return `undefined`

// 6) `this` in Event Handlers : In HTML event handlers, this refers to the HTML element that received the event
document.write('<button onclick="this.style.display='+" 'none' "+'">Click to Remove Me!</button> <br>');
// NOTE: When you click on the above button, it will disappear because of `onclick` property which is `button.style.display="none"`

// 7) Object Method Binding : `this` is the person object (The person object is the "owner" of the function)
var person = {
    firstName  : "Kumar",
    lastName   : "Anurag",
    id         : 5566,
    myFunction : function() {
      return this;
    }
};
var res = person.myFunction(); // myFunction() will return person object itself
document.write("5. "+res+" | Type: "+typeof  res+"<br>");

// 8) Explicit Function Binding 

/*
Theory:

1) The call() and apply() methods are predefined JavaScript methods.
2) They can both be used to call an object method with another object as argument.
*/

// Example 1: call()
var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"Kumar",
    lastName: "Anurag"
}
var res = person1.fullName.call(person2);  // Will return "John Doe"
document.write("6. "+res+" | Type: "+typeof  res+"<br>");

// Example 2: apply()
var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"Kumar",
    lastName: "Anurag"
}
var res = person1.fullName.apply(person2);  // Will return "John Doe"
document.write("7. "+res+" | Type: "+typeof  res+"<br>");

// KNOWLEDGE CLOUD: What is the difference between call() and apply()
/*
Differences:

1) The call() method takes arguments separately.
2) The apply() method takes arguments as an array.
3) NOTE: The apply() method is very handy if you want to use an array instead of an argument list.
*/

// Example 1: The apply() Method with Arguments
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"Kumar",
    lastName: "Anurag"
}
var res = person.fullName.apply(person1, ["New Delhi", "India"]);
document.write("8. "+res+" | Type: "+typeof  res+"<br>");

// Example 2: The call() Method with Arguments
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"Kumar",
    lastName: "Anurag"
}
var res = person.fullName.call(person1, "New Delhi", "India");
document.write("9. "+res+" | Type: "+typeof  res+"<br>");