// Functions

/*
Theory of Functions:

1) A function is a set of statements or instructions which performs a task
   or calculates a value.
2) To run a function, we need to call it by it's name i.e. function name
*/

// Function without Parameter

function HelloWorld(){
    document.write("Hello World <br>");
}

HelloWorld(); // function calling

// Function with parameters

// Program to print addition of two numbers

function add(x,y){
    var result = x + y;
    document.write("Addition: "+result+"<br>");
}

// function calling
add(3,4); 
add(5,8);

// Function with return type

function add_new(x,y){
    var result = x + y;
    return result;
}

var addition_answer = add_new(3,4);
document.write("Addition: "+addition_answer+"<br>");