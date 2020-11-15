// Arrays in JS

document.write("<h3>Cars:</h3><br>");

var cars = ["BMW", "Audi", "Kwid"];
// indexing:  0      1        2

cars.push(2);

document.write(typeof(cars)+"<br>");
for(var i=0; i < cars.length; i++){
    document.write(cars[i]+"<br>");
}

// Another method for defining Array

document.write("<h3>Fruits:</h3><br>");

var fruits = new Array("Apple", "Banana", "Guava");
// indexing:              0        1         2

fruits.push(2.3);

document.write(typeof(fruits)+"<br>");
for(var i=0; i < fruits.length; i++){
    document.write(fruits[i]+"<br>");
}

// Array Built-in Functions:

document.write("<h3>Array Built-in Functions:</h3><br>");

var arr = ["apple", "banana", "guava"];

// 1) toString() :- it converts an array to a string of (comma separated) array values
arr = arr.toString();
document.write("1. "+arr," ",typeof(arr)+"<br>");

var arr = ["apple", "banana", "guava"];

// 2) join() :- this method also joins all array elements into a string. It is similar to toString(), but in addition you can specify the separator
arr = arr.join(" * ");
document.write("2. "+arr," ",typeof(arr)+"<br>");

var arr = ["apple", "banana", "guava"];

// 3) pop() :- this  method removes the last element from an array
arr.pop();
document.write("3. "+arr," ",typeof(arr)+"<br>");

// 4) push() :- this method adds a new element to an array (at the end)
arr.push("kiwi");
document.write("4. "+arr," ",typeof(arr)+"<br>");

// 5) shift() :- this method removes the first array element and "shifts" all other elements to a lower index
arr.shift();
document.write("5. "+arr," ",typeof(arr)+"<br>");

// 6) unshift() :- this method adds a new element to an array (at the beginning), and "unshifts" older elements
arr.unshift("lemon");
document.write("6. "+arr," ",typeof(arr)+"<br>");

// Changing Elements in Array:

document.write("<h3>Changing Elements in Array:</h3><br>");

// Array elements are accessed using their index number

var arr = ["apple", "banana", "guava"];

arr[0] = "cherry";
document.write("1. "+arr," ",typeof(arr)+"<br>");

// The length property provides an easy way to append a new element to an array
arr[arr.length] = "apple";
document.write("2. "+arr," ",typeof(arr)+"<br>");

// Splicing in Array:

document.write("<h3>Splicing in Array:</h3><br>");

/*
Theory of splice():

1) The splice method can be used to add or remove elements from an array.
2) The  first argument specifies the location at which to begin adding or removing elements.
3) The second argument specifies the number of elements to remove. The third and subsequent
   arguments are optional; they specify elements to be added to the array.
*/

var arr = ["apple", "banana", "guava"];

// Adding elements using splice
arr.splice(1, 0, "kiwi", "mango", "cherry"); // new fruits will start adding from 1 index no
document.write("1. "+arr," ",typeof(arr)+"<br>");

var arr = ["apple", "banana", "guava", "kiwi", "cherry"];

// Deleting elements using splice
arr.splice(2,1) // for deleting 2nd index element
document.write("2. "+arr," ",typeof(arr)+"<br>");

// Merging (Concatenating) Arrays

document.write("<h3>Merging (Concatenating) Arrays:</h3><br>");

var myGirls = ["Pooja", "Deepika"];
var myBoys = ["Anurag", "Rohan", "Amit"];
var arr = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
document.write("1. "+arr," ",typeof(arr)+"<br>");

// NOTE: The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var arr = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
document.write("2. "+arr," ",typeof(arr)+"<br>");

// The concat() method can also take strings or numbers or booleans as arguments:

var arr1 = ["Emil", "Tobias", "Linus"];
var arr = arr1.concat(true,"apple",3,3.4); 
document.write("3. "+arr," ",typeof(arr)+"<br>");

// Slicing an Array

document.write("<h3>Slicing an Array:</h3><br>");

// The slice() method slices out a piece of an array into a new array
// This example slices out a part of an array starting from array element 1 ("Orange")

var arr1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var arr = arr1.slice(1);
document.write("1. "+arr," ",typeof(arr)+"<br>");

// The slice() method creates a new array. It does not remove any elements from the source array
document.write("2. "+arr1," ",typeof(arr1)+"<br>");

// slice() with two parameters

/*
1) The slice() method can take two arguments like slice(1, 3).
2) The method then selects elements from the start argument, 
   and up to (but not including) the end argument.
*/

var arr1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var arr = arr1.slice(1, 3);
document.write("3. "+arr," ",typeof(arr)+"<br>");