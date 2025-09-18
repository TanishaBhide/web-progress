let num=6;
let fact=1;
// Using for loop
for(i=1;i<=num;i++){
    fact=fact*i;
}
console.log(`Factorial of ${num} is: ${fact}`);

// using reduce function
let number=6;
let arr=[];
for(i=1;i<=number;i++){
    arr[i-1]=i;
}
function factorial(a,b){
    return a*b
}
let result=arr.reduce(factorial);
console.log(`Factorial of ${number} is: ${result}`);
