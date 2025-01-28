//First-Class,Higher Order, and Pure Functions
function addTwoNumbers(a, b){
    console.log(a + b)
}

function randomNum(){
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum(){
    return 42;
}

var useRandom = true;
var getNumber;

if (useRandom){
    getNumber = randomNum
}
else{
    getNumber = specificNum
}

addTwoNumbers(3,7)

//Higher Order Function

function addTwoNums(getNumber1, getNumber2){
    console.log(getNumber1() + getNumber2())
}
addTwoNums(specificNum,specificNum)
addTwoNums(specificNum,randomNum)
//Another example is pure function
function addTwoNumss(a, b) {
    console.log(a + b)
}
addTwoNumss(66,33)