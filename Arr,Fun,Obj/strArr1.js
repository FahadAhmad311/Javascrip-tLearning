//Strings are iterateable too..
var greetings = "Fahad Ahmad";
console.log(greetings.length)
console.log(greetings[0])
console.log(greetings[1])

for (var i = 0; i < greetings.length; i++){
    console.log(greetings[i])
}

//Strins != Arrays
var greet = "Hello ";
var iam = "Fahad";
//console.log(greet.pop())
console.log(greet+" "+iam)
console.log(greet.concat(iam))