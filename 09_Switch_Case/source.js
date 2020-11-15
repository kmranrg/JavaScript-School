// Program

/* 
Program to find  day of week by accepting its number.
Example: 1 -> Sunday, 2 -> Monday .....
*/

var day = 2;

switch(day){
    case 1:
        document.write("<h3>Sunday</h3>");
        break;
    case 2:
        document.write("<h3>Monday</h3>");
        break;
    case 3:
        document.write("<h3>Tuesday</h3>");
        break;
    case 4:
        document.write("<h3>Wednesday</h3>");
        break;
    case 5:
        document.write("<h3>Thursday</h3>");
        break;
    case 6:
        document.write("<h3>Friday</h3>");
        break;
    case 7:
        document.write("<h3>Saturday</h3>");
        break;
    default:
        document.write("<h3>Invalid Input!!</h3>");
        break;
}

// NOTE: In JS, switch can accept numbers, strings and booleans

// switch case accepting string value
var day = "Monday";

switch(day){
    case "Monday":
        document.write("<h3>First Working Day</h3>");
        break;
    default:
        document.write("<h3>Invalid Input!!</h3>");
        break;
}

// switch case accepting boolean value
var day = true;

switch(day){
    case true:
        document.write("<h3>Hello World</h3>");
        break;
    default:
        document.write("<h3>Invalid Input!!</h3>");
        break;
}