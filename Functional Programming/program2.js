function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    //myDay();
}
myDay();

console.log(' ')
//Second example
function example(){
    console.log('Line One');
    console.log('Line Two');
    console.log('Line Three');
}
example()
console.log(' ')
//Third example : Recursion..
let counter = 3;
function example1(){
    console.log(counter)
    counter = counter - 1;
    if (counter === 0)
        return console.log('Over');
    example1();
}
example1()