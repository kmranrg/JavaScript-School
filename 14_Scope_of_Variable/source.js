// Scope of Variable

var a = "global variable";

function myFunction(){
    var b = "local variable";
    document.write("1. "+a+"<br>");
    document.write("2. "+b+"<br>");
}

myFunction();

document.write("3. "+a+"<br>");
document.write("4. "+b+"<br>"); // it will not get printed because the scope of variable `b` is limited within myFunction block