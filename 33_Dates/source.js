// JS Dates
document.write("<h3>JS Dates</h3><br>");

// 1) Creating a simple Date Object
var res = new Date();
document.write("1. "+res+" | Type: "+typeof res+"<br>");

// NOTE: By default, JavaScript will use the browser's time zone and display a date as a full text string

// 2) Ways of creating a Date Object : 
/*
Theory:

1) Date objects are created with the new Date() constructor.
2) There are 4 ways of creating date objects. These are as follows:

(i) new Date()
(ii) new Date(year, month, day, hours, minutes, seconds, milliseconds)
(iii) new Date(milliseconds)
(iv) new Date(date string)
*/

// 3) new Date() : creates a new date object with the current date and time
var res = new Date();
document.write("2. "+res+" | Type: "+typeof res+"<br>");
// NOTE: Date objects are static. The computer time is ticking, but date objects are not.

// 4) new Date(year, month, ...) : creates a new date object with a specified date and time
var res = new Date(2018, 11, 24, 10, 33, 30, 0);
document.write("3. "+res+" | Type: "+typeof res+"<br>");
// NOTE: Note: JavaScript counts months from 0 to 11

// 5) 6 numbers specify year, month, day, hour, minute, second
var res = new Date(2018, 11, 24, 10, 33, 30);
document.write("4. "+res+" | Type: "+typeof res+"<br>");

// 6) 5 numbers specify year, month, day, hour, and minute
var res = new Date(2018, 11, 24, 10, 33);
document.write("5. "+res+" | Type: "+typeof res+"<br>");

// 7) 4 numbers specify year, month, day, and hour
var res = new Date(2018, 11, 24, 10);
document.write("6. "+res+" | Type: "+typeof res+"<br>");

// 8) 3 numbers specify year, month, and day
var res = new Date(2018, 11, 24);
document.write("7. "+res+" | Type: "+typeof res+"<br>");

// 9) 2 numbers specify year and month
var res = new Date(2018, 11);
document.write("7. "+res+" | Type: "+typeof res+"<br>");

// 10) IMPORTANT: If you supply only one parameter it will be treated as milliseconds
var res = new Date(1000); // By Default, JS take the date as Jan 1, 1970 with time as 5:30 AM (for Indian Zone)
document.write("9. "+res+" | Type: "+typeof res+"<br>"); 

// 11) Previous Century : One and two digit years will be interpreted as 19xx
var res = new Date(99, 11, 24);
document.write("10. "+res+" | Type: "+typeof res+"<br>");
var res = new Date(9, 11, 24);
document.write("11. "+res+" | Type: "+typeof res+"<br>");

// 12) new Date(dateString) : creates a new date object from a date string
var res = new Date("October 13, 2014 11:13:00");
document.write("12. "+res+" | Type: "+typeof res+"<br>");

// NOTE: JavaScript Stores Dates as Milliseconds. Zero time is January 01, 1970 00:00:00 UTC(Universal Time Coordinated).

// 13) new Date(milliseconds) :  creates a new date object as zero time plus milliseconds
var res = new Date(100000000000); // 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973
document.write("13. "+res+" | Type: "+typeof res+"<br>");
var res = new Date(-100000000000); // January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966
document.write("14. "+res+" | Type: "+typeof res+"<br>");

// KNOWLEDGE CLOUD: One day (24 hours) is 86 400 000 milliseconds.

// 14) Displaying Dates

// Example 1 : By Default
var res = new Date();
document.write("15. "+res+" | Type: "+typeof res+"<br>");

// Example 2 : displaying date using toString() method
var res = new Date();
res = res.toString();
document.write("16. "+res+" | Type: "+typeof res+"<br>");

// Example 3 : displaying date using toUTCString() method
var res = new Date();
res = res.toUTCString();
document.write("17. "+res+" | Type: "+typeof res+"<br>");

// Example 4 : displaying date using toDateString() method
var res = new Date();
res = res.toDateString();
document.write("18. "+res+" | Type: "+typeof res+"<br>");

// Example 5 : displaying date using toISOString() method
var res = new Date();
res = res.toISOString();
document.write("19. "+res+" | Type: "+typeof res+"<br>");

// 15) JS Get Date Methods
document.write("<h3>JS Get Date Methods</h3><br>");
/*
Theory:

Method	Description
===================
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
*/

// Example 1 : getFullYear()
var res = new Date();
res = res.getFullYear();
document.write("1. "+res+" | Type: "+typeof res+"<br>");

// 16) Set Date Methods
document.write("<h3>JS Set Date Methods</h3><br>");
/*
Theory:

Method	Description
===================
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/

// Example 1 : setFullYear()
var res = new Date();
res.setFullYear(2010);
document.write("1. "+res+" | Type: "+typeof res+"<br>");

// Example 2 : the setFullYear() method can optionally set month and day
var res = new Date();
res.setFullYear(2010, 6, 14);
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// Example 3 : the setDate() method sets the day of a date object (1-31)
var res = new Date();
res.setDate(16);
document.write("2. "+res+" | Type: "+typeof res+"<br>");

// 17) Comparing Dates
// Example : Let's compare the today's date with January 14, 2100
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (today < someday) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
document.write("3. "+text+" | Type: "+typeof text+"<br>");