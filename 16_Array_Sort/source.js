// Sorting an Array
document.write("<h3>Sorting an Array:</h3><br>");

//The sort() method sorts an array alphabetically
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits
document.write("1. "+fruits+"<br>");

// Problem with sort()
var fruits = ["Banana", "Orange", "Apple", "Mango", "berry", "almond"];
fruits.sort();
/* 
the above statement won't sort correctly because `almond` and `berry` 
starts with `a` and `b` which has higher ASCII vlaue than `A` and `B`
that's they will be sorted at the last
*/
document.write("1.1 "+fruits+"<br>");

// Solution to above problem
var fruits = ["Banana", "Orange", "Apple", "Mango", "berry", "almond"];
fruits.sort(function(a, b){
    var x = a.toLowerCase();
    var y = b.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
document.write("1.2 "+fruits+"<br>");

// Reversing an Array

// The reverse() method reverses the elements in an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
document.write("2. "+fruits+"<br>");

// Numeric Sort

/*
Theory of Numeric Sort:

1) By default, the sort() function sorts values as strings.
2) This works well for strings ("Apple" comes before "Banana").
3) However, if numbers are sorted as strings, "25" is bigger than "100",
   because "2" is bigger than "1".
4) Because of this, the sort() method will produce incorrect result when sorting numbers.
5) You can fix this by providing a compare function:
*/
var num = [40, 100, 1, 5, 25, 10];
// alphabetical sort
num.sort(); 
document.write("3. "+num+"<br>");

var num = [40, 100, 1, 5, 25, 10];
// for numerical sort using compare function inside sort function
num.sort(function (a,b){ return a - b; }); // in ascending order
document.write("4. "+num+"<br>");
num.sort(function (a,b){ return b - a; }); // in descending order
document.write("5. "+num+"<br>");

// Logic of compare function

/*
1) When the sort() function compares two values, it sends the values to the compare function,
   and sorts the values according to the returned (negative, zero, positive) value.
2) If the result is negative `a` is sorted before `b`.
3) If the result is positive `b` is sorted before `a`.
4) If the result is 0 no changes are done with the sort order of the two values.
*/

// Knowledge Cloud: How to generate a random integer in range(0-10)
var r = Math.floor(Math.random() * (10+1)); 
// Math.floor() takes nearest minimum interger
// Math.random() generates a random value beween 0 and 1
document.write("6. "+r+"<br>");

// Sorting an Array in Random Order : The Fisher Yates Method

var points = [40, 100, 1, 5, 25, 10];
document.write("7. "+points+"<br>");
for (i = points.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i);
  k = points[i];
  points[i] = points[j];
  points[j] = k;
}
document.write("8. "+points+"<br>");

// Maximum and Minimum Value in an Array

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
document.write("9. "+points[0]+"<br>"); // minimum value
document.write("10. "+points[points.length-1]+"<br>"); // maximum value

// NOTE: Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value

// Using Math.max() and Math.min()

var points = [40, 100, 1, 5, 25, 10];

// for maximum value
var res = Math.max.apply(null,points); // the second parameter (i.e. points) should be an array
document.write("11. "+res+"<br>");
// for minimum value
var res = Math.min.apply(null,points); // the second parameter (i.e. points) should be an array
document.write("12. "+res+"<br>");

// usage of Math.max() and Math.min()
var res = Math.max(1,-2,3);
document.write("13. "+res+"<br>");

var res = Math.min(1,-2,3);
document.write("13. "+res+"<br>");

/*
NOTE:

1) Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3)
2) Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3)
*/

// Sorting an Object
document.write("<h3>Sorting an Object:</h3><br>");

var cars = [
    {type:"Volvo", year:2016},
    {type:"Kwid", year:2001},
    {type:"BMW", year:2010}
  ];

// numerical sort according to year in ascending order
cars.sort(function(a, b){return a.year - b.year});
document.write("1.1 "+cars[0].type+" "+cars[0].year+"<br>");
document.write("1.2 "+cars[1].type+" "+cars[1].year+"<br>");
document.write("1.3 "+cars[2].type+" "+cars[2].year+"<br>");

// numerical sort according to year in descending order
cars.sort(function(a, b){return b.year - a.year});
document.write("2.1 "+cars[0].type+" "+cars[0].year+"<br>");
document.write("2.2 "+cars[1].type+" "+cars[1].year+"<br>");
document.write("2.3 "+cars[2].type+" "+cars[2].year+"<br>");

// alphabetical sort according to type
cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
document.write("3.1 "+cars[0].type+" "+cars[0].year+"<br>");
document.write("3.2 "+cars[1].type+" "+cars[1].year+"<br>");
document.write("3.3 "+cars[2].type+" "+cars[2].year+"<br>");

cars.reverse() // reversing the above alphabetically sorted array

document.write("4.1 "+cars[0].type+" "+cars[0].year+"<br>");
document.write("4.2 "+cars[1].type+" "+cars[1].year+"<br>");
document.write("4.3 "+cars[2].type+" "+cars[2].year+"<br>");