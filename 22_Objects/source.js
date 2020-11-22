// JS Objects
document.write("<h3>JS Objects</h3><br>");

// 1) Object Definition

var person = {
    firstName: "Kumar",
    lastName: "Anurag",
    age: 19,
    eyeColor: "blue"
};

// 2) Accesing the Object Properties

var res = person.lastName;
document.write("1. "+res+" | Type: "+typeof res+"<br>");

var res = person["lastName"];
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// 3) Object Methods

var person = {
    firstName: "Kumar",
    lastName : "Anurag",
    id       : 100,
    fullName : function() {
      return this.firstName + "-" + this.lastName;
    }
};

// 4) Accessing Object Methods

var res = person.fullName();
document.write("3. "+res+" | Type: "+typeof res+"<br>");

var res = person.fullName; // this will return the function definition
document.write("4. "+res+" | Type: "+typeof res+"<br>");
