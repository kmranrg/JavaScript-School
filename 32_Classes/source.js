// JS Classes
document.write("<h3>JS Classes</h3><br>");

/*
History:

1) ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
2) JavaScript Classes are templates for JavaScript Objects.
*/

// 1) JS Class Syntax : Use keyword class and always add a method named constructor()
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}
document.write("1. "+Car+" | Type: "+typeof Car+"<br>"); // type of `Car` is a function
/*
NOTE: 

1) The above class has two initial properties: "name" and "year".
2) A JavaScript class is not an object.
3) It is a template for JavaScript objects.
*/

// 2) Creating an Object
let myCar1 = new Car("Audi", 2010);
document.write("2. "+myCar1+" | Car Name: "+myCar1.name+" | Type: "+typeof myCar1+"<br>");
let myCar2 = new Car("Kwid", 2018);
document.write("3. "+myCar2+" | Car Year: "+myCar2.year+" | Type: "+typeof myCar2+"<br>");

// NOTE: The constructor method is called automatically when a new object is created.

/*
KNOWLEDGE CLOUD: The Constructor Method

1) The constructor method is a special method.
2) It has to have the exact name "constructor".
3) It is executed automatically when a new object is created.
4) It is used to initialize object properties
5) If you do not define a constructor method, JavaScript will add an empty constructor method.
*/

// 3) Class Methods : Class methods are created with the same syntax as object methods.
class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
}
let date = new Date();
var currentYear = date.getFullYear();
let myCar3 = new Car1("Ford", 2014);
var res = "My car is " + myCar3.age(currentYear) + " years old.";
document.write("4. "+res+" | Type: "+typeof res+"<br>");