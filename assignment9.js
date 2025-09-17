function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b !== 0){
        return a/b;
    } else {
        return "Division by zero error";
    }
}
function exponent(a,b){
    return a**b;
}

let a= readInput("Enter the first number: ");
let b= readInput("Enter the second number: ");
let random=Math.random();
if(random<0.1){
    console.log("Addition: " + subtract(a,b));
    console.log("Subtraction: " + divide(a,b));
    console.log("Multiplication: " + add(a,b));
    console.log("Division: " + exponent(a,b));
}
else{
    console.log("Addition: " + add(a,b));
    console.log("Subtraction: " + subtract(a,b));
    console.log("Multiplication: " + multiply(a,b));
    console.log("Division: " + divide(a,b));
    console.log("Exponentiation: " + exponent(a,b));
}