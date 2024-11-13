function myDisplay(something){
    document.getElementById("demo").innerHTML=something;
}
function myCalculation(num1, num2, sum){
    let result= num1 + num2;
    sum(result);
}
myCalculation(4,7,myDisplay);