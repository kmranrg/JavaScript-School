// Programs

// Program to find whether a number is even or odd

var x = 2;
var y = 3;

if(x%2 === 0){
    document.write("<h4>Even Number</h4>");
}else{
    document.write("<h4>Odd Number</h4>");
}

if(y%2 === 0){
    document.write("<h4>Even Number</h4>");
}else{
    document.write("<h4>Odd Number</h4>");
}

// Program to find whether a number is positive or negative

var x = 2;
var y = -1;
var z = 0;

if(x > 0){
    document.write("<h4>Positive Number</h4>");
}else if(x < 0){
    document.write("<h4>Negative Number</h4>");
}else{
    document.write("<h4>Neither Negative nor Positive</h4>");
}

if(y > 0){
    document.write("<h4>Positive Number</h4>");
}else if(y < 0){
    document.write("<h4>Negative Number</h4>");
}else{
    document.write("<h4>Neither Negative nor Positive</h4>");
}

// Program to find whether a number is positive and even

var x = 10;

// Method 1: Uncool Method
if(x > 0){
    if(x%2 === 0){
        document.write("<h4>Number is positive and even</h4>");
    }else{
        document.write("<h4>Number is positive but odd</h4>");
    }
}else{
    document.write("<h4>Number is negative</h4>");
}

// Method 2: Cool Method
if(x > 0 && x%2 === 0){
    document.write("<h4>Number is positive and even</h4>");
}