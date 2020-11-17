// Iteration Methods in JavaScript
document.write("<h3>Iteration Methods in JavaScript:</h3><br>");

// 1) forEach() : this method calls a function (a callback function) once for each array element

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + "Value: " + value + " | Index: " + index + " | Whole Array: " + array + "<br>";
}

document.write("1. <br>");
document.write(txt+"<br>");

// 2) Array.map() 

/*
Theory:

1) The map() method creates a new array by performing a function on each array element.
2) The map() method does not execute the function for array elements without values.
3) The map() method does not change the original array.
*/

// Example: Program to print multiplication table of 5 in single line using Array.map()

var numbers1 = [1,2,3,4,5,6,7,8,9,10];
var numbers2 = numbers1.map(myFunction1);

function myFunction1(value, index, array){
    return value*5;
}

document.write("2. "+numbers2+" Type: "+typeof(numbers2)+"<br>");

// 3) Array.filter(): this  method creates a new array with array elements that passes a test

/*
Program to create a new array from a given array based on the condition
that each new array element should be greater than 18
*/

var numbers = [48,-8,50,20.2,-26];
var over18 = numbers.filter(myFunction2);

function myFunction2(value, index, array){
    return value>18;
}

document.write("3. "+over18+" Type: "+typeof(over18)+"<br>");

// 4) Array.reduce()

/*
Theory:

1) The reduce() method runs a function on each array element to produce (reduce it to) a single value
2) The reduce() method works from left-to-right in the array
3) The reduce() method does not reduce the original array
*/

var numbers = [12,3,4,-10];
var sum = numbers.reduce(function(total, value, index, array){return total+value;});
document.write("4. "+" Original Array: "+numbers+" | Sum: "+sum+" | Type of Sum : "+typeof(sum)+"<br>");

// NOTE: The reduce() method can accept an initial value
var numbers = [12,3,4,-10];
var sum = numbers.reduce(myFunction3,100);

function myFunction3(total, value, index, array){
    return total+value;
}
document.write("5. "+" Original Array: "+numbers+" | Sum: "+sum+" | Type of Sum : "+typeof(sum)+"<br>");

// 5) Array.reduceRight()

/*
Theory:

1) The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
2) The reduceRight() works from right-to-left in the array.
3)The reduceRight() method does not reduce the original array.
*/

var numbers = [12,3,4,-10];
var sum = numbers.reduceRight(myFunction4,100);

function myFunction4(total, value, index, array){
    return total+value;
}
document.write("6. "+" Original Array: "+numbers+" | Sum: "+sum+" | Type of Sum : "+typeof(sum)+"<br>");

// 6) Array.every()

/*
Theory:

1) The every() method check if all array values pass a test.
2) It returns boolean value.
*/

numbers = [1,21,34,-8];
var allAbove18 = numbers.every(myFunction5);

function myFunction5(value, index, array) {
    return value > 18;
}

document.write("7. "+" Original Array: "+numbers+" | allAbove18: "+allAbove18+" | Type of allAbove18 : "+typeof(allAbove18)+"<br>");

// 6) Array.some()

/*
Theory:

1) The some() method check if some array values pass a test.
2) It returns boolean value.
*/

numbers = [1,21,34,-8];
var someAbove18 = numbers.some(myFunction6);

function myFunction6(value, index, array) {
    return value > 18;
}

document.write("8. "+" Original Array: "+numbers+" | someAbove18: "+someAbove18+" | Type of someAbove18 : "+typeof(someAbove18)+"<br>");

// 7) Array.indexOf() 

/*
Theory:

1) This method searches an array for an element value and returns its index value.
2) It returns the index value of first occurence while searching form left-to-right.
3) It returns -1 if the item is not found.

SYNTAX:

array.indexOf(item, start)

PARAMETER DESCRIPTION:

1) item: Required. The item to search for.
2) start: Optional. Where to start the search. 
          Negative values will start at the given position counting from the end, 
          and search to the end.
          By default, JS takes start parameter as 0.
*/

// Example 1 
var cars = ["bmw", "audi", "mercedes", "kwid", "audi", "nano"]; 
var ind = cars.indexOf("audi"); // it will start searching from index 0 to the end of array

document.write("9. "+" Original Array: "+cars+" | IndexValue: "+ind+" | Type of IndexValue : "+typeof(ind)+"<br>");

// Example 2 
// index:     0      1          2        3       4        5
var cars = ["bmw", "audi", "mercedes", "kwid", "audi", "nano"];
// index:    -6     -5         -4       -3      -2       -1
var ind = cars.indexOf("audi", 2); // it will start searching from index 2 to the end of array

document.write("10. "+" Original Array: "+cars+" | IndexValue: "+ind+" | Type of IndexValue : "+typeof(ind)+"<br>");

// Example 3 
// index:     0      1          2        3       4        5
var cars = ["bmw", "audi", "mercedes", "kwid", "audi", "nano"];
// index:    -6     -5         -4       -3      -2       -1
var ind = cars.indexOf("audi", -4); // it will start searching from index -4 to the end of array

document.write("11. "+" Original Array: "+cars+" | IndexValue: "+ind+" | Type of IndexValue : "+typeof(ind)+"<br>");

// 8) Array.lastIndexOf()

/*
Theory:

1) Array.lastIndexOf() is the same as Array.indexOf(), 
   but returns the position of the last occurrence of the specified element.
2) It returns the index value of first occurence while searching from right-to-left.
3) It returns -1 if the item is not found.

SYNTAX:

array.lastIndexOf(item, start)

PARAMETER DESCRIPTION:

1) item: Required. The item to search for.
2) start: Optional. Where to start the search. 
          Negative values will start at the given position counting from the end, 
          and search to the beginning
          By default, JS takes start parameter as -1.
*/

// Example 1
// index:     0      1          2        3       4        5
var cars = ["bmw", "audi", "mercedes", "kwid", "audi", "nano"];
// index:    -6     -5         -4       -3      -2       -1
var ind = cars.lastIndexOf("audi"); // it will start searching from index -1 to the start of array

document.write("12. "+" Original Array: "+cars+" | IndexValue: "+ind+" | Type of IndexValue : "+typeof(ind)+"<br>");

// Example 2
// index:     0      1          2        3       4        5
var cars = ["bmw", "audi", "mercedes", "kwid", "audi", "nano"];
// index:    -6     -5         -4       -3      -2       -1
var ind = cars.lastIndexOf("audi", 3); // it will start searching from index 3 to the start of array

document.write("13. "+" Original Array: "+cars+" | IndexValue: "+ind+" | Type of IndexValue : "+typeof(ind)+"<br>");

// Example 3
// index:     0      1          2        3       4        5
var cars = ["bmw", "audi", "mercedes", "kwid", "audi", "nano"];
// index:    -6     -5         -4       -3      -2       -1
var ind = cars.lastIndexOf("audi", -4); // it will start searching from index -4 to start of array

document.write("12. "+" Original Array: "+cars+" | IndexValue: "+ind+" | Type of IndexValue : "+typeof(ind)+"<br>");

// 9) Array.find() : this method returns the value of the first array element that passes a test function

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction7);

function myFunction7(value, index, array) {
  return value > 18;
}

document.write("13. "+" Original Array: "+numbers+" | Value: "+first+" | Type of Value : "+typeof(first)+"<br>");

// 10) Array.findIndex() : this method returns the index of the first array element that passes a test function

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction8);

function myFunction8(value, index, array) {
  return value > 18;
}

document.write("14. "+" Original Array: "+numbers+" | Value Index: "+first+" | Type of Value Index: "+typeof(first)+"<br>");
